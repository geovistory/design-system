import { Color } from '@ionic/core';
import { Component, Event, EventEmitter, h, Host, Prop, State } from '@stencil/core';
import { FetchResponse } from '../../lib/FetchResponse';
import { SparqlBinding, sparqlJson } from '../../lib/sparqlJson';
import { getSSRData } from '../../lib/ssr/getSSRData';
import { setSSRData } from '../../lib/ssr/setSSRData';
import { setSSRId } from '../../lib/ssr/setSSRId';

const qrPropsWithCount = (uri: string, language: string, predicateInclude?: string, predicateExclude?: string) => {
  let selectClause: string;

  // Function ot parse comma separated list of URI's
  const parsePredicateList = (input: string): string[] => {
    return input.split(',').map(rawPredicate => `${rawPredicate.trim()}`);
  };

  let filterClause = '';
  if (predicateExclude) {
    const excludePredicates = parsePredicateList(predicateExclude);
    const predicates = excludePredicates.map(predicate => `"${predicate}"`);
    filterClause = `FILTER (str(?predicate) NOT IN (
      ${predicates.join(`,
        `)}
      ))`;
  }

  if (predicateInclude) {
    const includePredicates = parsePredicateList(predicateInclude);
    const unions = includePredicates.map(
      predicate => `
      {
        SELECT (<${predicate}> as ?predicate) ?predicateLabel (count(distinct ?object) as ?count)
        WHERE {
          <${uri}> <${predicate}> ?object .
          OPTIONAL {
            <${predicate}> rdfs:label ?predicateLabel .
            FILTER(LANG(?predicateLabel) IN ("${language}", "en"))
          } .
          ${filterClause}
        }
        GROUP BY ?predicate ?predicateLabel
      }`,
    );
    selectClause = `SELECT * {
      ${unions.join('\nUNION\n')}
    }`;
  } else {
    selectClause = `
    SELECT ?predicate ?predicateLabel (count(distinct ?object) as ?count)
    WHERE {
      <${uri}> ?predicate ?object .
      OPTIONAL {
        ?predicate rdfs:label ?predicateLabel .
        FILTER(LANG(?predicateLabel) IN ("${language}", "en"))
      } .
      ${filterClause}
    }
    GROUP BY ?predicate ?predicateLabel
    `;
  }

  return `
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX xml: <http://www.w3.org/XML/1998/namespace>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX geo: <http://www.opengis.net/ont/geosparql#>
PREFIX time: <http://www.w3.org/2006/time#>
PREFIX ontome: <https://ontome.net/ontology/>
PREFIX geov: <http://geovistory.org/resource/>

${selectClause}
`;
};

export interface PropsWithCountBindings {
  predicate: SparqlBinding;
  predicateLabel?: SparqlBinding;
  count: SparqlBinding;
}

export interface GeovEntityPropertiesData extends FetchResponse {
  propsWithCount?: PropsWithCountBindings[];
  error?: boolean;
}

/**
 * This component fetches and displays the properties of an entity.
 * Each predicate is queried and displayed as a paginated list.
 * The properties `predicateInclude` and `predicateExclude` allow to customize
 * what predicates to fetch.
 */
@Component({
  tag: 'geov-entity-properties',
  styleUrl: 'geov-entity-properties.css',
  shadow: true,
})
export class GeovEntityProperties {
  /**
   * declares an _ssrId property that is reflected as attribute
   */
  @Prop({ reflect: true }) _ssrId?: string;
  /**
   * declares data as state
   */
  @State() data?: GeovEntityPropertiesData;
  /**
   * sparqlEndpoint
   * URL of the sparql endpoint
   */
  @Prop() sparqlEndpoint: string;
  /**
   * entityUri
   * URI entity, e.g. 'http://geovistory.org/resource/i1234'
   */
  @Prop() entityUri: string;
  /**
   * language
   * prints the label with the language or english, if not found, e.g. 'en'
   */
  @Prop() language = 'en';
  /*
   * fetchBeforRender
   * if true, componentWillLoad() returns a promise for the loading of all data [default: true]
   */
  @Prop() fetchBeforeRender = true;

  /**
   * uriRegex
   * Optional regex with capturing groups to transform
   * the uri into the desired url. To use together
   * with uriReplace.
   */
  @Prop() uriRegex?: string;
  /**
   * uriReplace
   * String used to replace the uriRegex.
   *
   * Example (pseudo code):
   * const uriRegex = (http:\/\/geovistory.org\/)(.*)
   * const uriReplace = "http://dev.geovistory.org/resource/$2?p=123"
   * http://geovistory.org/resource/i54321 => http://dev.geovistory.org/resource/54321?p=123
   */
  @Prop() uriReplace?: string;

  /**
   * color
   * Color of the properties
   */
  @Prop() color: Color = '';

  /**
   * predicateInclude
   * Comma separated list of predicate URI's to include, e.g:
   * Fetch only the rdfs:label and p86i (was born)
   * 'http://www.w3.org/2000/01/rdf-schema#label,https://ontome.net/ontology/p86i'
   */
  @Prop() predicateInclude?: string;

  /**
   * predicateInclude
   * Comma separated list of predicate URI's to exclude, e.g:
   * Don't fetch the rdfs:label and p86i (was born)
   * 'http://www.w3.org/2000/01/rdf-schema#label,https://ontome.net/ontology/p86i'
   */
  @Prop() predicateExclude?: string;

  /**
   * fixedGrid
   * if true, the content is wrapped in a <ion-grid fixed=true></ion-grid>
   */
  @Prop() fixedGrid?: boolean;

  /**
   * Emits fetched data, after being fetched.
   */
  @Event() dataFetched: EventEmitter<GeovEntityPropertiesData>;

  constructor() {
    setSSRId(this);
  }

  async componentWillLoad() {
    if (this.fetchBeforeRender) {
      /**
       * try to get data from ssr
       */
      this.data = getSSRData(this._ssrId);
    }

    if (!this.data) {
      // set data to loading (in immutable way)
      this.data = { loading: true };

      // fetch data via http
      await this.fetchData() // <- await this promise!
        .then(d => {
          // filter language
          d.propsWithCount = this.filterByLanguage(d.propsWithCount ?? [], this.language);
          this.data = d;
          setSSRData(this._ssrId, d);
          this.dataFetched.emit(d);
          return d;
        })
        .catch(d => {
          this.data = d;
          return d;
        });
    }
  }

  private filterByLanguage(props: PropsWithCountBindings[], lang: string) {
    //If we have 2 labels in the same language, concatenate for one and deactivate for the other
    props.map(pr => {
      props
        .filter(anpr => {
          return pr.predicate.value == anpr.predicate.value && pr != anpr && pr.predicateLabel['xml:lang'] == anpr.predicateLabel['xml:lang'];
        })
        .forEach(anpr => {
          pr.predicateLabel.value += ', ' + anpr.predicateLabel.value;
          anpr.predicateLabel['xml:lang'] = 'deactivate'; //It's just a trick
        });
    });

    return props.filter(pr => {
      // Find if there are other identical predicates
      if (
        props.filter(anpr => {
          return pr.predicate.value == anpr.predicate.value && pr != anpr;
        }).length
      ) {
        // Yes another same predicate. Priority selected language
        if (pr.predicateLabel['xml:lang'] == lang) {
          //We keep pr
          return true;
        } else {
          //We don't keep pr
          return false;
        }
      } else {
        //No, we keep pr
        return true;
      }
    });
  }

  async fetchData(): Promise<GeovEntityPropertiesData> {
    let d: GeovEntityPropertiesData = { loading: true };
    const query = qrPropsWithCount(this.entityUri, this.language, this.predicateInclude, this.predicateExclude);
    await sparqlJson<PropsWithCountBindings>(this.sparqlEndpoint, query)
      .then(res => {
        d = {
          loading: false,
          propsWithCount: res?.results?.bindings,
        };
      })
      .catch(_ => {
        d = {
          loading: false,
          error: true,
        };
      });

    return d;
  }

  render() {
    if (this.fixedGrid) {
      return (
        <Host>
          <ion-grid fixed={true} class="container">
            {this.renderCards()}
          </ion-grid>
        </Host>
      );
    }
    return <Host class="container">{this.renderCards()}</Host>;
  }

  renderCards() {
    return this.data.propsWithCount.map(b => (
      <div class={'predicateContainer'}>
        <geov-entity-props-by-predicate
          entityUri={this.entityUri}
          sparqlEndpoint={this.sparqlEndpoint}
          totalCount={Number(b.count.value)}
          predicateUri={b.predicate.value}
          predicateLabel={
            b.predicateLabel
              ? b.predicateLabel?.value
              : b.predicate.value.replace('http://www.w3.org/2000/01/rdf-schema#', 'rdfs:').replace('http://www.w3.org/1999/02/22-rdf-syntax-ns#', 'rdf:')
          }
          uriRegex={this.uriRegex}
          uriReplace={this.uriReplace}
          color={this.color}
        ></geov-entity-props-by-predicate>
      </div>
    ));
  }
}

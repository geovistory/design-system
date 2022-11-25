import { Component, Host, h, Prop, State, Method } from '@stencil/core';
import { getSSRData } from '../../lib/ssr/getSSRData';
import { setSSRData } from '../../lib/ssr/setSSRData';
import { setSSRId } from '../../lib/ssr/setSSRId';
import { FetchResponse } from '../../lib/FetchResponse';
import { SparqlBinding, sparqlJson } from '../../lib/sparqlJson';

const qrOutgoingPropsWithCount = (id: string, language: string) => `
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX xml: <http://www.w3.org/XML/1998/namespace>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX geo: <http://www.opengis.net/ont/geosparql#>
PREFIX time: <http://www.w3.org/2006/time#>
PREFIX ontome: <https://ontome.net/ontology/>
PREFIX geov: <http://geovistory.org/resource/>

SELECT ?predicate ?predicateLabel (count(distinct ?object) as ?count)
WHERE {
  geov:${id} ?predicate ?object .
  OPTIONAL {?predicate rdfs:label ?predicateLabel . FILTER(LANG(?predicateLabel) IN ("${language}", "en"))} .
}
GROUP BY ?predicate ?predicateLabel
LIMIT 100
`;

const qrIncomingPropsWithCount = (id: string, language: string) => `
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX xml: <http://www.w3.org/XML/1998/namespace>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX geo: <http://www.opengis.net/ont/geosparql#>
PREFIX time: <http://www.w3.org/2006/time#>
PREFIX ontome: <https://ontome.net/ontology/>
PREFIX geov: <http://geovistory.org/resource/>

SELECT   ?predicate ?predicateLabel (count(distinct ?subject) as ?count)
WHERE {
 ?subject ?predicate geov:${id} .
 ?predicate rdfs:label ?predicateLabel . 
 FILTER(LANG(?predicateLabel) IN ("${language}", "en"))
}
GROUP BY ?predicate ?predicateLabel
LIMIT 100
`;

export interface PropsWithCountBindings {
  predicate: SparqlBinding;
  predicateLabel?: SparqlBinding;
  count: SparqlBinding;
}

export interface GeovEntityPropertiesData extends FetchResponse {
  outgoingPropsWithCount?: PropsWithCountBindings[];
  incomingPropsWithCount?: PropsWithCountBindings[];
  error?: boolean;
}

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
   * entityId
   * ID number of entity, e.g. 'i315800'
   */
  @Prop() entityId: string;
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

  constructor() {
    setSSRId(this);
  }

  async componentWillLoad() {
    if (this.fetchBeforeRender) {
      /**
       * try to get data from ssr
       */
      this.data = getSSRData(this._ssrId);
      this.data.outgoingPropsWithCount = this.filterByLanguage(this.data.outgoingPropsWithCount, this.language);
      this.data.incomingPropsWithCount = this.filterByLanguage(this.data.incomingPropsWithCount, this.language);
    }

    if (!this.data) {
      // set data to loading (in immutable way)
      this.data = { loading: true };

      // fetch data via http
      await this.fetchData() // <- await this promise!
        .then(d => {
          this.data = d;
          setSSRData(this._ssrId, d);
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

  @Method()
  async fetchData(): Promise<GeovEntityPropertiesData> {
    let d: GeovEntityPropertiesData = { loading: true };
    await sparqlJson<PropsWithCountBindings>(this.sparqlEndpoint, qrOutgoingPropsWithCount(this.entityId, this.language))
      .then(res => {
        const props = this.filterByLanguage(res?.results?.bindings, this.language);
        d = {
          loading: false,
          outgoingPropsWithCount: props,
        };
      })
      .catch(_ => {
        d = {
          loading: false,
          error: true,
        };
      });

    await sparqlJson<PropsWithCountBindings>(this.sparqlEndpoint, qrIncomingPropsWithCount(this.entityId, this.language))
      .then(res => {
        const props = this.filterByLanguage(res?.results?.bindings, this.language);
        d = {
          loading: false,
          outgoingPropsWithCount: d.outgoingPropsWithCount,
          incomingPropsWithCount: props,
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
    return (
      <Host>
        {this.data.outgoingPropsWithCount?.map(b => (
          <geov-entity-props-by-predicate
            entityId={this.entityId}
            sparqlEndpoint={this.sparqlEndpoint}
            isOutgoing={true}
            totalCount={Number(b.count.value)}
            predicateUri={b.predicate.value}
            predicateLabel={
              b.predicateLabel
                ? b.predicateLabel?.value
                : b.predicate.value.replace('http://www.w3.org/2000/01/rdf-schema#', 'rdfs:').replace('http://www.w3.org/1999/02/22-rdf-syntax-ns#', 'rdf:')
            }
            uriRegex={this.uriRegex}
            uriReplace={this.uriReplace}
          ></geov-entity-props-by-predicate>
        ))}
        {this.data.incomingPropsWithCount?.map(b => (
          <geov-entity-props-by-predicate
            entityId={this.entityId}
            sparqlEndpoint={this.sparqlEndpoint}
            isOutgoing={false}
            totalCount={Number(b.count.value)}
            predicateUri={b.predicate.value}
            predicateLabel={
              b.predicateLabel
                ? b.predicateLabel?.value
                : b.predicate.value.replace('http://www.w3.org/2000/01/rdf-schema#', 'rdfs:').replace('http://www.w3.org/1999/02/22-rdf-syntax-ns#', 'rdf:')
            }
            uriRegex={this.uriRegex}
            uriReplace={this.uriReplace}
          ></geov-entity-props-by-predicate>
        ))}
        <slot></slot>
      </Host>
    );
  }
}

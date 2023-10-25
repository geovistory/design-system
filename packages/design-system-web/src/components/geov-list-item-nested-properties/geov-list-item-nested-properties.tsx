import { Component, Host, Prop, State, h } from '@stencil/core';
import { SparqlBinding, sparqlJson } from '../../lib/sparqlJson';
import { FetchResponse } from '../../lib/FetchResponse';
import { setSSRId } from '../../lib/ssr/setSSRId';
import { getSSRData } from '../../lib/ssr/getSSRData';
import { setSSRData } from '../../lib/ssr/setSSRData';

const qrNestedProps = (entityId: string, language: string) => {
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

  SELECT ?predicate ?predicateLabel ?object ?objectLabel ?predicateTimeSpan ?predicateTimeSpanLabel ?dateTimeDescriptionLabel
  WHERE {
      geov:${entityId} ?predicate ?object.
      OPTIONAL{ ?object rdfs:label ?objectLabel } .

      ?predicate rdfs:label ?predicateLabel .
      FILTER(LANG(?predicateLabel) IN ("${language}", "en")) .

      OPTIONAL{
        FILTER REGEX(str(?object), "(ts)$") .
        ?object ?predicateTimeSpan ?dateTimeDescription .
    	  ?predicateTimeSpan rdfs:label ?predicateTimeSpanLabel .
        ?dateTimeDescription rdfs:label ?dateTimeDescriptionLabel .
      	FILTER(LANG(?predicateTimeSpanLabel) IN ("${language}", "en")) .
    	  ?dateTimeDescription rdf:type time:DateTimeDescription
      }
  }
  LIMIT 10`;
};

export interface NestedProps {
  predicate: SparqlBinding;
  predicateLabel?: SparqlBinding;
  object?: SparqlBinding;
  objectLabel?: SparqlBinding;
  predicateTimeSpan?: SparqlBinding;
  predicateTimeSpanLabel?: SparqlBinding;
  dateTimeDescriptionLabel?: SparqlBinding;
}

export interface GeovListItemNestedPropertiesData extends FetchResponse {
  nestedProps?: NestedProps[];
  error?: boolean;
}

@Component({
  tag: 'geov-list-item-nested-properties',
  styleUrl: 'geov-list-item-nested-properties.css',
  shadow: true,
})
export class GeovListItemNestedProperties {
  /**
   * declares an _ssrId property that is reflected as attribute
   */
  @Prop({ reflect: true }) _ssrId?: string;
  /**
   * declares data as state
   */
  @State() data?: GeovListItemNestedPropertiesData;
  /**
   * if true, componentWillLoad() returns a promise for the loading of all data [default: true]
   */
  @Prop() fetchBeforeRender = true;
  /**
   * sparqlEndpoint
   * URL of the sparql endpoint
   */
  @Prop() sparqlEndpoint: string;
  /**
   * entityId
   * Uri of subject, e.g. 'http://www.geovistory.org/ressource/iXXX'
   */
  @Prop() entityUri: string;

  /**
   * language
   * prints the label with the language or english, if not found, e.g. 'en'
   */
  @Prop() language = 'en';

  /**
   * predicateInclude
   * Comma separated list of predicate URI's to include, e.g:
   * Fetch only the rdfs:label and p86i (was born)
   * 'http://www.w3.org/2000/01/rdf-schema#label,https://ontome.net/ontology/p86i'
   */
  @Prop() predicateInclude?: string;

  /**
   * predicateExclude
   * Comma separated list of predicate URI's to exclude, e.g:
   * Don't fetch the rdfs:label and p86i (was born)
   * 'http://www.w3.org/2000/01/rdf-schema#label,https://ontome.net/ontology/p86i'
   */
  @Prop() predicateExclude?: string;

  /*
   * assigns an id to the component
   */
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
          d.nestedProps = this.filterByLanguage(d.nestedProps ?? [], this.language);
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

  private filterByLanguage(props: NestedProps[], lang: string) {
    //If we have 2 differents labels in the same language, concatenate for one and deactivate for the other
    props.map(pr => {
      props
        .filter(anpr => {
          return (
            pr.predicate.value != 'https://ontome.net/ontology/p4' &&
            pr.predicate.value == anpr.predicate.value &&
            pr != anpr &&
            pr.predicateLabel['xml:lang'] == anpr.predicateLabel['xml:lang']
          );
        })
        .forEach(anpr => {
          if (pr.predicateLabel.value != anpr.predicateLabel.value) {
            pr.predicateLabel.value += ', ' + anpr.predicateLabel.value;
          }
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

  async fetchData(): Promise<GeovListItemNestedPropertiesData> {
    let d: GeovListItemNestedPropertiesData = { loading: true };
    const query = qrNestedProps(this.entityUri.split('/').at(-1), this.language);
    await sparqlJson<NestedProps>(this.sparqlEndpoint, query)
      .then(res => {
        d = {
          loading: false,
          nestedProps: res?.results?.bindings,
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
    const url = this.entityUri;

    let label: string;
    let type: string;
    this.data.nestedProps
      .filter(b => {
        return b.predicateLabel?.value == 'has label' || b.predicateLabel?.value == 'has type';
      })
      .map(b => {
        const value = b.dateTimeDescriptionLabel?.value ?? b.objectLabel?.value ?? b.object?.value ?? '';
        if (b.predicateLabel?.value == 'has label') {
          label = value;
        }
        if (b.predicateLabel?.value == 'has type') {
          type = value;
        }
      });
    return (
      <Host>
        <ion-item href={url} lines="none" class="itemNested">
          <ion-label>
            <p>{type}</p>
            <h3>{label}</h3>
          </ion-label>
        </ion-item>
        <ion-grid fixed={true}>
          <ion-row>
            {this.data.nestedProps
              .filter(b => {
                return b.predicateLabel?.value != 'has label' && b.predicateLabel?.value != 'has type';
              })
              .map(b => (
                <ion-col>
                  <ion-item lines="none" class="nestedProp">
                    <ion-label>
                      <p>
                        {b.predicateTimeSpanLabel
                          ? b.predicateTimeSpanLabel.value
                          : b.predicateLabel
                          ? b.predicateLabel?.value
                          : b.predicate.value.replace('http://www.w3.org/2000/01/rdf-schema#', 'rdfs:').replace('http://www.w3.org/1999/02/22-rdf-syntax-ns#', 'rdf:')}
                      </p>
                      <h3>
                        {b.dateTimeDescriptionLabel ? (
                          b.dateTimeDescriptionLabel.value
                        ) : b.objectLabel ? (
                          b.objectLabel?.value
                        ) : b.object && b.object?.type == 'uri' ? (
                          <a href={b.object?.value} target="_blank">
                            {b.object?.value}
                          </a>
                        ) : (
                          b.object?.value
                        )}
                      </h3>
                    </ion-label>
                  </ion-item>
                </ion-col>
              ))}
          </ion-row>
        </ion-grid>
        <slot></slot>
      </Host>
    );
  }
}

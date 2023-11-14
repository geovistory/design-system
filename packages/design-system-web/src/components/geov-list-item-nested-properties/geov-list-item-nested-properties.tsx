import { Color } from '@ionic/core';
import { Component, Fragment, Host, Prop, State, h } from '@stencil/core';
import { FetchResponse } from '../../lib/FetchResponse';
import { getTimeSpanUri } from '../../lib/getTimeSpanUri';
import { regexReplace } from '../../lib/regexReplace';
import { SparqlBinding, sparqlJson } from '../../lib/sparqlJson';
import { getSSRData } from '../../lib/ssr/getSSRData';
import { setSSRData } from '../../lib/ssr/setSSRData';
import { setSSRId } from '../../lib/ssr/setSSRId';

const qrNestedProps = (entityUri: string, language: string) => {
  return ` PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
    PREFIX owl: <http://www.w3.org/2002/07/owl#>
    PREFIX xml: <http://www.w3.org/XML/1998/namespace>
    PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
    PREFIX geo: <http://www.opengis.net/ont/geosparql#>
    PREFIX time: <http://www.w3.org/2006/time#>
    PREFIX ontome: <https://ontome.net/ontology/>
    PREFIX geov: <http://geovistory.org/resource/>

    SELECT
      ?predicate # predicate uri
      ?count # count of props per predicate
      ?object # one sample object per predicate
      (GROUP_CONCAT(DISTINCT ?pLabel; separator=", ") as ?predicateLabel) # predicate label
      (GROUP_CONCAT(DISTINCT ?oLabel; separator=", ") as ?objectLabel) # object label
    WHERE {

      # Innermost subquery:
      {
        # Select all properties of entity, group by predicate, count
        # and select one sample object per predicate
        SELECT ?predicate (count(?predicate) as ?count) (sample(?o) as ?object) WHERE {
          <${entityUri}> ?predicate ?o.
        }
        GROUP BY ?predicate
      }.

      # Left join predicate labels
      OPTIONAL {
        ?predicate rdfs:label ?pLabel . FILTER(LANG(?pLabel) IN ("${language}", "en")) .
      }.

      # Left join add object labels
      OPTIONAL {
        ?object rdfs:label ?oLabel
      }.
  }

  GROUP BY ?predicate ?count ?object
  # limit to max 50 predicate groups
  LIMIT 50`;
};

interface NestedProps {
  predicate: SparqlBinding;
  predicateLabel?: SparqlBinding;
  object?: SparqlBinding;
  objectLabel?: SparqlBinding;
  count?: SparqlBinding;
}

interface GeovListItemNestedPropertiesData extends FetchResponse {
  nestedProps?: NestedProps[];
  error?: boolean;
}

/**
 * This component displays information about an entity (URI) in a compact way.
 */
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
   * Color assigned to ion-item
   */
  @Prop() color: Color = '';

  /**
   * parent subject and predicate
   * If given, the reversed nested property is hidden, if the parent subject is the only
   * object of the nested prop
   */
  @Prop() parent?: { subjectUri: string; predicateUri: string };

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
      this.data = {
        loading: true,
      };

      // fetch data via http
      await this.fetchData() // <- await this promise!

        .then(d => {
          // filter language
          d.nestedProps = d.nestedProps ?? []; // this.filterByLanguage(d.nestedProps ?? [], this.language);
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

  render() {
    const { rdfTypeProp, rdfsLabelProp, restProps } = this.splitProps(this.data.nestedProps);

    return (
      <Host>
        <div class="containerForQuery">
          <div class="container">
            <div class="header">
              <div class={'classLabelContainer'}>
                <geov-entity-class-icon classURI={rdfTypeProp.object.value} />
                <a href={rdfTypeProp.object.value} target="_blank" class="classLabel">
                  {rdfTypeProp?.objectLabel?.value}
                </a>{' '}
                <div class={'timespanLabel'}>
                  <geov-time-span sparqlEndpoint={this.sparqlEndpoint} entityUri={getTimeSpanUri(this.entityUri)}></geov-time-span>
                </div>
              </div>
              <div class={'entityLabelContainer'}>
                <a href={this.prepareUrl(this.entityUri)} target="_blank" class="entityLink">
                  {rdfsLabelProp?.object?.value}
                </a>
              </div>
            </div>
            <div class="content">
              <ion-row>
                {restProps.map(b => (
                  <ion-col>
                    <ion-item lines="none" class="nestedProp">
                      <ion-label>
                        <p class="propLabelWrapper">
                          {this.renderPredicateLabel(b.predicateLabel, b.predicate)}
                          {this.renderCount(b.count)}
                        </p>
                        <h3> {this.renderObject(b.object, b.objectLabel, this.getPredicateLabel(b.predicateLabel, b.predicate))}</h3>
                      </ion-label>
                    </ion-item>
                  </ion-col>
                ))}
              </ion-row>
            </div>
          </div>
        </div>
        <slot></slot>
      </Host>
    );
  }

  /**
   * Splits the property array into three parts:
   * - one rdfs:label prop (entity label)
   * - one rdf:type prop (class label)
   * - all other props
   * @param props
   * @returns
   */
  splitProps(props: NestedProps[]) {
    let rdfsLabelProp: NestedProps;
    let rdfTypeProp: NestedProps;
    const restProps: NestedProps[] = [];

    for (const p of props) {
      if (p.predicate.value === 'http://www.w3.org/1999/02/22-rdf-syntax-ns#type') rdfTypeProp = p;
      else if (p.predicate.value === 'http://www.w3.org/2000/01/rdf-schema#label') rdfsLabelProp = p;
      // push to rest, unless it is the inverse prop of parent
      else if (!this.isInverseOfParent(p)) restProps.push(p);
    }
    // sort by prop label A-Z
    restProps.sort((a, b) => {
      const labelA = a?.predicateLabel?.value ?? '';
      const labelB = b?.predicateLabel?.value ?? '';
      return labelA.localeCompare(labelB);
    });

    return {
      rdfTypeProp,
      rdfsLabelProp,
      restProps,
    };
  }
  /**
   * If the property is the inverse of the parent property, return true, else false.
   *
   * @param p
   */
  isInverseOfParent(p: NestedProps) {
    if (!this.parent?.predicateUri || !this.parent?.subjectUri) return false;

    // if we have more then one props of this predicate, we in in fact have a
    // group of properties. This group is not identical to the parent property,
    // which is only one property by definition
    if (parseInt(p.count?.value) > 1) return false;

    const thisPredicate = p.predicate.value;
    const parentPredicate = this.parent.predicateUri;

    const isInversePredicate = () => {
      const overlapOne = thisPredicate.replace(parentPredicate, '');
      const overlapTwo = parentPredicate.replace(thisPredicate, '');
      return overlapOne === 'i' || overlapTwo == 'i';
    };

    // it is inverse, in case object = parentSubject and predicate isInverseOf parentPredicate
    if (p.object.value === this.parent.subjectUri && isInversePredicate()) return true;

    return false;
  }

  async fetchData(): Promise<GeovListItemNestedPropertiesData> {
    let d: GeovListItemNestedPropertiesData = {
      loading: true,
    };

    const query = qrNestedProps(this.entityUri, this.language);

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

  /**
   * render the predicate label
   * @param predicateLabel
   * @param predicate
   * @returns jsx element
   */
  renderPredicateLabel(predicateLabel: SparqlBinding, predicate: SparqlBinding) {
    return (
      <a class="propLabel" href={predicate.value} target="_blank">
        {this.getPredicateLabel(predicateLabel, predicate)}
      </a>
    );
  }
  /**
   * extract the predicate label string from predicate label and predicate bindings.
   * It returns the predicate label, if available, else the predicate uri.
   * in case the predicate uri is rendered, abbreviate the most common uris.
   * @param predicateLabel
   * @param predicate
   * @returns string
   */
  getPredicateLabel(predicateLabel: SparqlBinding, predicate: SparqlBinding) {
    return predicateLabel?.value ?? predicate.value.replace('http://www.w3.org/2000/01/rdf-schema#', 'rdfs:').replace('http://www.w3.org/1999/02/22-rdf-syntax-ns#', 'rdf:');
  }
  /**
   * render the count information (only if count > 1)
   * @param count
   * @returns jsx element
   */
  renderCount(count: SparqlBinding) {
    const c = parseInt(count?.value);
    if (c > 1) return <Fragment>&nbsp;({count?.value})</Fragment>;
    return;
  }

  renderObject(object: SparqlBinding, objectLabel: SparqlBinding, modalTitle: string) {
    // if object is a URI
    if (object?.type === 'uri') {
      return (
        <a href={this.prepareUrl(object?.value)} target="_blank" class="entityLink">
          {/* use entity label if available. Else the URI */}
          {objectLabel?.value ?? object?.value}
        </a>
      );
    }
    // return object?.value;
    // else it is a literal
    switch (object?.datatype) {
      case 'http://www.opengis.net/ont/geosparql#wktLiteral':
        return <geov-display-geosparql-wktliteral color={this.color} value={object?.value}></geov-display-geosparql-wktliteral>;
      case 'http://www.w3.org/1999/02/22-rdf-syntax-ns#langString':
      case 'http://www.w3.org/2001/XMLSchema#string':
      default:
        return <geov-display-string-literal color={this.color} modalTitle={modalTitle} label={object?.value} language={object?.['xml:lang']}></geov-display-string-literal>;
    }
  }

  /**
   * Prepares a url by applying the uirRegex and uriReplace
   *
   * @param url
   * @returns string
   */
  prepareUrl(url: string) {
    return regexReplace(url, this.uriRegex, this.uriReplace);
  }
}

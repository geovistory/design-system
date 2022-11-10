import { Component, Host, h, Prop, State } from '@stencil/core';
import { SparqlBinding, sparqlJson } from '../../lib/sparqlJson';

const qrOutgoingPropsWithCount = (id: string) => `
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX xml: <http://www.w3.org/XML/1998/namespace>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX geo: <http://www.opengis.net/ont/geosparql#>
PREFIX time: <http://www.w3.org/2006/time#>
PREFIX ontome: <https://ontome.net/ontology/>
PREFIX geov: <http://geovistory.org/resource/>

SELECT ?predicate ?predicateLabel ?object (count(distinct ?object) as ?count) 
WHERE {
  geov:${id} ?predicate ?object .
  OPTIONAL {?predicate rdfs:label ?predicateLabel}
}
GROUP BY ?predicate ?predicateLabel ?object
LIMIT 100
`;

const qrIncomingPropsWithCount = (id: string) => `
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
 ?predicate rdfs:label ?predicateLabel
}
GROUP BY ?predicate ?predicateLabel
LIMIT 100
`;

export interface PropsWithCountBindings {
  predicate: SparqlBinding;
  predicateLabel?: SparqlBinding;
  object?: SparqlBinding;
  count: SparqlBinding;
}

@Component({
  tag: 'geov-entity-properties',
  styleUrl: 'geov-entity-properties.css',
  shadow: true,
})
export class GeovEntityProperties {
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
  @Prop() fetchBeforeRender: boolean;

  @State() outgoingPropsWithCount: PropsWithCountBindings[];

  @State() incomingPropsWithCount: PropsWithCountBindings[];

  async componentWillLoad() {
    sparqlJson<PropsWithCountBindings>(this.sparqlEndpoint, qrOutgoingPropsWithCount(this.entityId)).then(res => {
      this.outgoingPropsWithCount = res?.results?.bindings.filter(b => b.predicateLabel?.['xml:lang'] == this.language || typeof b.predicateLabel === 'undefined');
    });

    sparqlJson<PropsWithCountBindings>(this.sparqlEndpoint, qrIncomingPropsWithCount(this.entityId)).then(res => {
      this.incomingPropsWithCount = res?.results?.bindings.filter(b => b.predicateLabel?.['xml:lang'] == this.language || typeof b.predicateLabel === 'undefined');
    });
  }

  render() {
    return (
      <Host>
        {this.outgoingPropsWithCount?.map(b => (
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
          ></geov-entity-props-by-predicate>
        ))}
        {this.incomingPropsWithCount?.map(b => (
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
          ></geov-entity-props-by-predicate>
        ))}
        <slot></slot>
      </Host>
    );
  }
}

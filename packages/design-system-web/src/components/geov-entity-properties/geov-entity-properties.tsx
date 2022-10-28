import { Component, Host, h, Prop, State } from '@stencil/core';
import { sparqlJson } from '../../lib/sparqlJson';

const qrOntomeURI = (id: string) => `
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX ontome: <https://ontome.net/ontology/>
PREFIX geov: <http://geovistory.org/resource/>

SELECT ?object
WHERE {
  geov:${id} rdf:type ?object .
}
LIMIT 1
`;

const qrOutgoingProps = (id: string) => `
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX xml: <http://www.w3.org/XML/1998/namespace>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX geo: <http://www.opengis.net/ont/geosparql#>
PREFIX time: <http://www.w3.org/2006/time#>
PREFIX ontome: <https://ontome.net/ontology/>
PREFIX geov: <http://geovistory.org/resource/>

SELECT ?subject ?predicate ?predicateLabel ?object ?dt
WHERE {
  geov:${id} ?predicate ?object .
  ?predicate rdfs:label ?predicateLabel
  BIND (datatype(?object) AS ?dt)
}
LIMIT 10
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

export interface Binding<T> {
  subject?: {
    type: T,
    value: T
  },
  subjectLabel?: {
    type: T,
    value: T
  },
  predicate?: {
    type: T,
    value: T
  },
  predicateLabel?: {
    type: T,
    'xml:lang': T,
    value: T
  },
  object?: {
    type: T,
    value: T
  },
  objectLabel?: {
    type: T,
    value: T
  },
  count?: {
    type: T,
    value: T
  }
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
  @Prop() language = "en";
  /*
  * fetchBeforRender
  * if true, componentWillLoad() returns a promise for the loading of all data [default: true]
  */
  @Prop() fetchBeforeRender: boolean; 

  @State() outgoingProps: Binding<string>[];
  
  @State() ontomeURI: string; 

  @State() incomingPropsWithCount: Binding<string>[];

  async componentWillLoad() {

    sparqlJson<Binding<string>>(this.sparqlEndpoint, qrOntomeURI(this.entityId))
      .then(res => {
        this.ontomeURI = res?.results?.bindings?.[0].object.value;
      }
    );

    sparqlJson<Binding<string>>(this.sparqlEndpoint, qrOutgoingProps(this.entityId))
      .then(res => {
        this.outgoingProps = res?.results?.bindings.filter(b => b.predicateLabel['xml:lang'] == this.language);
      }
    );

    sparqlJson<Binding<string>>(this.sparqlEndpoint, qrIncomingPropsWithCount(this.entityId))
      .then(res => {
        this.incomingPropsWithCount = res?.results?.bindings.filter(b => b.predicateLabel['xml:lang'] == this.language)
      }
    );
  }

  render() {
    return (
      <Host>
        geov:{this.entityId}
        <ion-item color="light" lines="none">
          <ion-label>rdf:type</ion-label>
        </ion-item>
        <ion-item lines="none" href={this.ontomeURI} target="_blank">
          <ion-label><geov-entity-class-label sparqlEndpoint={this.sparqlEndpoint} entityId={this.entityId}></geov-entity-class-label></ion-label>
        </ion-item>
        <ion-item color="light" lines="none">
          <ion-label>rdf:label</ion-label>
        </ion-item>
        <ion-item lines="none">
          <ion-label><geov-entity-label sparqlEndpoint={this.sparqlEndpoint} entityId={this.entityId}></geov-entity-label></ion-label>
        </ion-item>
        {this.outgoingProps?.map(b => (
          <geov-entity-props-by-predicate 
            sparqlEndpoint={this.sparqlEndpoint} entityId={this.entityId} props={b} isOutgoing={true}></geov-entity-props-by-predicate>
        ))}
        {this.incomingPropsWithCount?.map(b => (
          <geov-entity-props-by-predicate 
            sparqlEndpoint={this.sparqlEndpoint} entityId={this.entityId}  props={b} isOutgoing={false}></geov-entity-props-by-predicate>
        ))}
        <slot></slot>
      </Host>
    );
  }

}

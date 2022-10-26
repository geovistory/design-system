import { Component, Host, h, Prop, State } from '@stencil/core';
import { sparqlJson } from '../../lib/sparqlJson';

const qrOutgoingTriples = (id: string) => `
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX xml: <http://www.w3.org/XML/1998/namespace>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX geo: <http://www.opengis.net/ont/geosparql#>
PREFIX time: <http://www.w3.org/2006/time#>
PREFIX ontome: <https://ontome.net/ontology/>
PREFIX geov: <http://geovistory.org/resource/>

SELECT ?subject ?predicate ?predicateLabel ?object ?objectLabel ?dt
WHERE {
  geov:${id} ?predicate ?object .
  ?predicate rdfs:label ?predicateLabel.
  OPTIONAL {?object rdfs:label ?objectLabel.}
  BIND (datatype(?object) AS ?dt)
}
LIMIT 20
`;

export interface Property<T> {
  predicate?: {
    type: T,
    value: T
  },
  predicateLabel?: {
    type: T,
    value: T
  },
  object?: {
    type: T,
    value: T
  }
  objectLabel?: {
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
  @Prop() language: string;
  /*
  * fetchBeforRender
  * if true, componentWillLoad() returns a promise for the loading of all data [default: true]
  */
  @Prop() fetchBeforeRender: boolean; 

  @State() properties: Property<string>[];

  async componentWillLoad() {
    sparqlJson<Property<string>>(this.sparqlEndpoint, qrOutgoingTriples(this.entityId))
        .then(res => {
          this.properties = res?.results?.bindings;
        });
    }

  render() {
    
    return (
      <Host>
        geov:{this.entityId}
        <ion-item color="light" lines="none">
          <ion-label>rdf:type</ion-label>
        </ion-item>
        <ion-item lines="none" href="https://ontome.net" target="_blank">
          <ion-label><geov-entity-class-label sparqlEndpoint={this.sparqlEndpoint} entityId={this.entityId}></geov-entity-class-label></ion-label>
        </ion-item>
        <ion-item color="light" lines="none">
          <ion-label>rdf:label</ion-label>
        </ion-item>
        <ion-item lines="none">
          <ion-label><geov-entity-label sparqlEndpoint={this.sparqlEndpoint} entityId={this.entityId}></geov-entity-label></ion-label>
        </ion-item>
        {this.properties?.map(b => (
          <geov-property-list propertyLabel={b.predicateLabel?.value} entityLabel={b.objectLabel?.value}></geov-property-list>
        ))}
        <slot></slot>
      </Host>
    );
  }

}

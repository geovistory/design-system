import { Component, Host, h, Prop, State } from '@stencil/core';
import { sparqlJson } from '../../lib/sparqlJson';

const qrOntomeURI = (id: string) => `
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX ontome: <https://ontome.net/ontology/>
PREFIX geov: <http://geovistory.org/resource/>

SELECT ?object
WHERE {
  OPTIONAL{geov:${id} rdf:type ?object .}
}
LIMIT 1
`;

const qrTypeAndLabel = (id: string) => `
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX xml: <http://www.w3.org/XML/1998/namespace>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX geo: <http://www.opengis.net/ont/geosparql#>
PREFIX time: <http://www.w3.org/2006/time#>
PREFIX ontome: <https://ontome.net/ontology/>
PREFIX geov: <http://geovistory.org/resource/>

SELECT ?subject ?subjectLabel ?objectLabel
WHERE {
  {SELECT ?subject WHERE {geov:${id} rdf:type ?subject.} LIMIT 1}.
  ?subject rdfs:label ?objectLabel .
  geov:${id} rdfs:label ?subjectLabel.
}
`;

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

SELECT ?predicate ?predicateLabel (count(distinct ?object) as ?count) 
WHERE {
  geov:${id} ?predicate ?object .
  ?predicate rdfs:label ?predicateLabel
}
GROUP BY ?predicate ?predicateLabel
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

export interface Binding<T> {
  subject?: {
    type: T,
    datatype: T,
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
  },
  subjectType?: {
    type: T,
    value: T
  },
  subjectTypeLabel?: {
    type: T,
    value: T
  },
  dt?: {
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

  @State() outgoingPropsWithCount: Binding<string>[];
  
  @State() ontomeURI: string; 

  @State() incomingPropsWithCount: Binding<string>[];

  @State() typeAndLabel: Binding<string>;

  async componentWillLoad() {
    sparqlJson<Binding<string>>(this.sparqlEndpoint, qrOntomeURI(this.entityId))
      .then(res => {
        this.ontomeURI = res?.results?.bindings?.[0].object?.value || '#';
      }
    );

    sparqlJson<Binding<string>>(this.sparqlEndpoint, qrTypeAndLabel(this.entityId))
      .then(res => {
        this.typeAndLabel = res?.results?.bindings?.[0];
      }
    );

    sparqlJson<Binding<string>>(this.sparqlEndpoint, qrOutgoingPropsWithCount(this.entityId))
      .then(res => {
        this.outgoingPropsWithCount = res?.results?.bindings.filter(b => b.predicateLabel['xml:lang'] == this.language);
      }
    );

    sparqlJson<Binding<string>>(this.sparqlEndpoint, qrIncomingPropsWithCount(this.entityId))
      .then(res => {
        this.incomingPropsWithCount = res?.results?.bindings.filter(b => b.predicateLabel['xml:lang'] == this.language);
      }
    );
  }

  render() {
    return (
      <Host>
        {this.typeAndLabel?.objectLabel && <ion-item color="light" lines="none">
          <ion-label>rdf:type</ion-label>
        </ion-item>}
        {this.typeAndLabel?.objectLabel && <ion-item lines="none" href={this.ontomeURI} target="_blank">
          <ion-label>{this.typeAndLabel?.objectLabel.value}</ion-label>
        </ion-item>}
        {this.typeAndLabel?.subjectLabel && <ion-item color="light" lines="none">
          <ion-label>rdfs:label</ion-label>
        </ion-item>}
        {this.typeAndLabel?.subjectLabel && <ion-item lines="none">
          <ion-label>{this.typeAndLabel?.subjectLabel.value}</ion-label>
        </ion-item>}
        {this.outgoingPropsWithCount?.map(b => (
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

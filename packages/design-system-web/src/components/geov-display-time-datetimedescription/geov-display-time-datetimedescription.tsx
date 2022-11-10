import { Component, Host, h, Prop, State } from '@stencil/core';
import { SparqlBinding, sparqlJson } from '../../lib/sparqlJson';

const qrPropertiesDateTimeDescription = (id: string) => `
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX xml: <http://www.w3.org/XML/1998/namespace>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX geo: <http://www.opengis.net/ont/geosparql#>
PREFIX time: <http://www.w3.org/2006/time#>
PREFIX ontome: <https://ontome.net/ontology/>
PREFIX geov: <http://geovistory.org/resource/>

SELECT ?subject ?predicate ?object ?dt
WHERE {
geov:${id} ?predicate ?object .
  BIND (datatype(?object) AS ?dt)
}
LIMIT 10
`;

export interface DateBinding {
  subject: SparqlBinding;
  predicate: SparqlBinding;
  object: SparqlBinding;
}

@Component({
  tag: 'geov-display-time-datetimedescription',
  shadow: true,
})
export class GeovDisplayTimeDatetimedescription {
  /**
   * entityId
   * ID number of entity, e.g. 'iXXX'
   */
  @Prop() entityId: string;
  /**
   * sparqlEndpoint
   * URL of the sparql endpoint
   */
  @Prop() sparqlEndpoint: string;
  @State() day: string;
  @State() month: string;
  @State() year: string;

  async componentWillLoad() {
    console.log(qrPropertiesDateTimeDescription(this.entityId));
    sparqlJson<DateBinding>(this.sparqlEndpoint, qrPropertiesDateTimeDescription(this.entityId)).then(res => {
      res?.results?.bindings.forEach(b => {
        if (b.predicate.value == 'http://www.w3.org/2006/time#day') {
          this.day = b.object.value.replace('---', '');
        }
        if (b.predicate.value == 'http://www.w3.org/2006/time#month') {
          this.month = b.object.value.replace('--', '');
        }
        if (b.predicate.value == 'http://www.w3.org/2006/time#year') {
          this.year = b.object.value;
        }
      });
    });
  }

  render() {
    return (
      <Host>
        {this.year}-{this.month}-{this.day}
        <slot></slot>
      </Host>
    );
  }
}

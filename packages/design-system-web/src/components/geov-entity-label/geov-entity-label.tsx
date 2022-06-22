import { Component, Host, h, Prop, State } from '@stencil/core';
import { sparqlJson } from '../../lib/sparqlJson';

const qrLabel = (id: string) => `
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX geov: <http://geovistory.org/resource/>

SELECT ?o
WHERE {
  geov:${id} rdfs:label ?o .
}
LIMIT 1
`;

@Component({
  tag: 'geov-entity-label',
  styleUrl: 'geov-entity-label.css',
  shadow: true,
})
export class GeovEntityLabel {
  @Prop() sparqlEndpoint: string;

  /**  id number of entity. i */
  @Prop() entityId: string;

  @State() label: string;
  @State() error: boolean;
  @State() loading = true;

  connectedCallback() {
    sparqlJson(this.sparqlEndpoint, qrLabel(this.entityId))
      .then(res => {
        this.label = res?.results?.bindings?.[0]?.o?.value;
        this.loading = false;
      })
      .catch(e => {
        console.log(e);
        this.loading = false;
        this.error = true;
      });
  }

  render() {
    return (
      <Host>
        {this.label}
        {this.loading ? `loading...` : ``}
        {this.error ? `error!` : ``}
        {!this.label && !this.loading && !this.error ? <span class="no-label-found">no label found</span> : ``}
        <slot></slot>
      </Host>
    );
  }
}

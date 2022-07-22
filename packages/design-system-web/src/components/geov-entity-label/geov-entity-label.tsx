import { Component, h, Host, Method, Prop, State } from '@stencil/core';
import { SparqlBinding, sparqlJson } from '../../lib/sparqlJson';

const qrLabel = (id: string) => `
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX geov: <http://geovistory.org/resource/>

SELECT ?o
WHERE {
  geov:${id} rdfs:label ?o .
}
LIMIT 1
`;

export interface Data {
  label?: string;
  error?: boolean;
  loading: boolean;
}

@Component({
  tag: 'geov-entity-label',
  styleUrl: 'geov-entity-label.css',
  shadow: true,
})
export class GeovEntityLabel {
  @Prop() sparqlEndpoint: string;

  /**  id number of entity. i */
  @Prop() entityId: string;

  @Prop({ mutable: true }) data?: Data = { loading: true };

  @State() msg: string;

  componentWillLoad() {
    if (this.data.loading) {
      this.msg = 'component data was fetched by component';
      this.fetchData()
        .then(d => (this.data = d))
        .catch(d => (this.data = d));
    } else {
      this.msg = 'component data was given by Input';
      this.data = { ...this.data };
    }
  }

  @Method()
  async fetchData(): Promise<Data> {
    return sparqlJson<{ o: SparqlBinding<string> }>(this.sparqlEndpoint, qrLabel(this.entityId))
      .then(res => {
        return {
          ...this.data,
          label: res?.results?.bindings?.[0]?.o?.value,
          loading: false,
        };
      })
      .catch(_ => {
        return {
          ...this.data,
          error: true,
          loading: false,
        };
      });
  }

  render() {
    return (
      <Host>
        <div>{this.msg}</div>
        {this.data.label}
        {this.data.loading ? `loading...` : ``}
        {this.data.error ? `error!` : ``}
        {!this.data.label && !this.data.loading && !this.data.error ? <span class="no-label-found">no label found</span> : ``}
        <slot></slot>
      </Host>
    );
  }
}

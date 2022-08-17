import { Component, h, Host, Method, Prop, State, Watch } from '@stencil/core';
import { FetchResponse } from '../../lib/FetchResponse';
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

export interface GeovDataFetchExampleData extends FetchResponse {
  label?: string;
  error?: boolean;
}

@Component({
  tag: 'geov-data-fetch-example',
  styleUrl: 'geov-data-fetch-example.css',
  // shadow: true,
})
export class GeovDataFetchExample {
  /**
   * data (optional)
   * if provided, component won't fetchData()
   */
  @Prop({ mutable: true }) data?: GeovDataFetchExampleData | string;
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


  @State() d?: GeovDataFetchExampleData;
  @State() msg: string;

  componentWillLoad() {
    if (this.data) {
      // parse data given by the @Prop 'data'
      this.parseDataProp();
      this.msg = 'component data was given by Input';
    } else {
      // fetch data via http
      this.d = { loading: true };
      this.fetchData()
      .then(d => (this.d = d))
      .catch(d => (this.d = d));
      this.msg = 'component data was fetched by component';
    }
  }

  @Watch('data')
  parseDataProp() {
    if (this.data) {
      if (typeof this.data === 'string') this.d = JSON.parse(this.data);
      else this.d = {...this.data};
    }
  }

  /**
   * does the sparql request(s)
   * @returns a Promise with the data for this component
   */
  @Method()
  async fetchData(): Promise<GeovDataFetchExampleData> {
    return sparqlJson<{ o: SparqlBinding<string> }>(this.sparqlEndpoint, qrLabel(this.entityId))
      .then(res => {
        return {
          ...this.d,
          // TODO: remove timestamp
          label: res?.results?.bindings?.[0]?.o?.value + ' fetched at: ' + new Date().toTimeString(),
          loading: false,
        };
      })
      .catch(_ => {
        return {
          ...this.d,
          error: true,
          loading: false,
        };
      });
  }

  render() {
    return (
      <Host>
        <div>{this.msg}</div>
        {this.d.label}
        {this.d.loading ? `loading...` : ``}
        {this.d.error ? `error!` : ``}
        {!this.d.label && !this.d.loading && !this.d.error ? <span class="no-label-found">no label found</span> : ``}
        <button onClick={()=>this.msg="clicked"}>click me!</button>
        <slot></slot>
      </Host>
    );
  }
}

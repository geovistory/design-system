import { Component, h, Host, Prop, State } from '@stencil/core';
import { FetchResponse } from '../../lib/FetchResponse';
import { SparqlBinding, sparqlJson } from '../../lib/sparqlJson';
import { getSSRData } from '../../lib/ssr/getSSRData';
import { setSSRData } from '../../lib/ssr/setSSRData';
import { setSSRId } from '../../lib/ssr/setSSRId';

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

/**
 * This component is an example for developers who want to ceate a component that
 *
 * - fetches data from a sparql endpoint
 * - is prepared for SSR and hydration
 */
@Component({
  tag: 'geov-data-fetch-example',
  styleUrl: 'geov-data-fetch-example.css',
  // shadow: true,
})
export class GeovDataFetchExample {
  /**
   * _ssrId is short for server side rendering id and
   * identifies this component and the fetched data
   * respectively. Set this only if you want to
   * enable this component to fetch serve side
   */
  @Prop({ reflect: true }) _ssrId?: string;

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

  @State() data?: GeovDataFetchExampleData;
  @State() msg: string;

  constructor() {
    // set id for server side rendering of dynamic data
    setSSRId(this);
  }

  /**
   * called once when component is ready. good for data fetching.
   * if `componentWillLoad()` returns a promise, stencil hydrate
   * awaits this promise for server side rendering. See:
   * https://stenciljs.com/docs/static-site-generation-basics
   */
  async componentWillLoad() {
    // try to get data from ssr
    this.data = getSSRData(this._ssrId);
    // if no data found, fetchData

    if (!this.data) {
      // set data to loading (in immutable way)
      this.data = { loading: true };

      // fetch data via http
      await this.fetchData() // <- await this promise!
        .then(d => {
          this.data = d;
          setSSRData(this._ssrId, d);
          return d;
        })
        .catch(d => {
          this.data = d;
          return d;
        });
      this.msg = 'component data was fetched by component';
    }
  }

  /**
   * Do the sparql request(s)
   * @returns a Promise with the data for this component
   */
  async fetchData(): Promise<GeovDataFetchExampleData> {
    return sparqlJson<{ o: SparqlBinding }>(this.sparqlEndpoint, qrLabel(this.entityId))
      .then(res => {
        // process and return the data in case of success
        return {
          ...this.data,
          label: res?.results?.bindings?.[0]?.o?.value + ' fetched at: ' + new Date().toTimeString(),
          loading: false,
        };
      })
      .catch(_ => {
        // process and return the data in case of error
        return {
          ...this.data,
          error: true,
          loading: false,
        };
      });
  }

  buttonClick = (e: MouseEvent) => {
    this.msg = 'clicked' + e.offsetX;
  };

  render() {
    return (
      <Host>
        <div>{this.msg}</div>
        {this.data.label}
        {this.data.loading ? `loading...` : ``}
        {this.data.error ? `error!` : ``}
        {!this.data.label && !this.data.loading && !this.data.error ? <span class="no-label-found">no label found</span> : ``}
        <button onClick={this.buttonClick}>click me!</button>
        <slot></slot>
      </Host>
    );
  }
}

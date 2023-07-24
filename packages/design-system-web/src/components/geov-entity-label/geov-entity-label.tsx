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

export interface GeovEntityLabelData extends FetchResponse {
  label?: string;
  error?: boolean;
}
/**
 * This component fetches and displays the entity label of a given Geovistory entity id.
 */
@Component({
  tag: 'geov-entity-label',
  styleUrl: 'geov-entity-label.css',
  shadow: true,
})
export class GeovEntityLabel {
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

  /**
   * the data (or model) used in the view
   */
  @State() data?: GeovEntityLabelData;

  constructor() {
    setSSRId(this);
  }

  async componentWillLoad() {
    // try to get data from ssr
    this.data = getSSRData(this._ssrId);

    // if no data found, fetchData
    if (!this.data) {
      // set data to loading (in immutable way)
      this.data = { loading: true };

      await this.fetchData()
        .then(d => {
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

  /**
   * Do the sparql request(s)
   * @returns a Promise with the data for this component
   */
  async fetchData(): Promise<GeovEntityLabelData> {
    return sparqlJson<{ o: SparqlBinding }>(this.sparqlEndpoint, qrLabel(this.entityId))
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
        {this.data.label}
        {this.data.loading && `loading...`}
        {this.data.error && `error!`}
        {!this.data.label && !this.data.loading && !this.data.error && <span class="no-label-found">no label found</span>}
        <slot />
      </Host>
    );
  }
}

import { Component, h, Host, Prop, State } from '@stencil/core';
import { FetchResponse } from '../../lib/FetchResponse';
import { SparqlBinding, sparqlJson } from '../../lib/sparqlJson';
import { getSSRData } from '../../lib/ssr/getSSRData';
import { setSSRData } from '../../lib/ssr/setSSRData';
import { setSSRId } from '../../lib/ssr/setSSRId';

const qrLabel = (id: string) => `
PREFIX onto-c: <https://ontome.net/class/>
PREFIX onto-p: <https://ontome.net/property/>
PREFIX geov: <http://geovistory.org/resource/>

SELECT  ?definition
WHERE {
  geov:${id} onto-p:1762 / onto-p:1864 ?definition;
}
LIMIT 10
`;

export interface GeovEntityDefinitionData extends FetchResponse {
  definitions?: string[];
  error?: boolean;
}

@Component({
  tag: 'geov-entity-definition',
  styleUrl: 'geov-entity-definition.css',
  shadow: true,
})
export class GeovEntityDefinition {
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
  @State() data?: GeovEntityDefinitionData;

  constructor() {
    console.log('def')
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
  async fetchData(): Promise<GeovEntityDefinitionData> {
    return sparqlJson<{ definition: SparqlBinding<string> }>(this.sparqlEndpoint, qrLabel(this.entityId))
      .then(res => {
        return {
          ...this.data,
          definitions: res?.results?.bindings?.map(b => b.definition?.value),
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
        {this.data.definitions.map(definition => (
          <p class="definition">{definition}</p>
        ))}
        {this.data.loading && `loading...`}
        {this.data.error && `error!`}
        {!this.data.definitions.length && !this.data.loading && !this.data.error && <span class="no-label-found">no definition found</span>}
        <slot />
      </Host>
    );
  }
}

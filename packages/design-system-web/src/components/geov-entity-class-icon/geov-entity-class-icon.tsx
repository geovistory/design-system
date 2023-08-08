import { Component, Host, h, State, Prop } from '@stencil/core';
import { FetchResponse } from '../../lib/FetchResponse';
import { sparqlJson, SparqlBinding } from '../../lib/sparqlJson';
import { getSSRData } from '../../lib/ssr/getSSRData';
import { setSSRData } from '../../lib/ssr/setSSRData';
import { setSSRId } from '../../lib/ssr/setSSRId';

const qrLabel = (id: string) => `
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX geov: <http://geovistory.org/resource/>

SELECT ?classLabel
WHERE {
  geov:${id} rdf:type ?t.
  optional{?t rdfs:label ?classLabel}
}
LIMIT 1
`;

const iconLabel = {
  'person': 'person-circle-outline',
  'geographicalplace': 'navigate-circle-outline',
  'group': 'people-circle-outline',
  'shipvoyage': 'boat-outline',
  'date-timedescription': 'calendar-outline',
};

interface GeovClassIconData extends FetchResponse {
  icon?: string;
  error?: boolean;
}

/**
 * This component fetches and displays the class icon of a given Geovistory entity id.
 */
@Component({
  tag: 'geov-entity-class-icon',
  styleUrl: 'geov-entity-class-icon.css',
  shadow: true,
})
export class GeovEntityClassIcon {
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
  @State() data?: GeovClassIconData;

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
  async fetchData(): Promise<GeovClassIconData> {
    return sparqlJson<{ classLabel: SparqlBinding }>(this.sparqlEndpoint, qrLabel(this.entityId))
      .then(res => {
        return {
          ...this.data,
          icon: iconLabel[res?.results?.bindings?.[0]?.classLabel?.value.toLowerCase().replace(/\s+/g, '')],
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
        {this.data.icon && <ion-icon name={this.data.icon}></ion-icon>}
        {this.data.loading && `loading...`}
        {this.data.error && `error!`}
        <slot />
      </Host>
    );
  }
}

import { Component, h, Host, Method, Prop, State, Element } from '@stencil/core';
import { FetchResponse } from '../../lib/FetchResponse';
import { setHappyDomId } from '../../lib/happyDOM/setHappyDomId';
import { endHappyDomTask } from '../../lib/happyDOM/endHappyDomTask';
import { getHappyDomData } from '../../lib/happyDOM/getHappyDomData';
import { setHappyDomData } from '../../lib/happyDOM/setHappyDomData';
import { startHappyDomTask } from '../../lib/happyDOM/startHappyDomTask';
import { SparqlBinding, sparqlJson } from '../../lib/sparqlJson';
import { Build } from '@stencil/core';

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

@Component({
  tag: 'geov-entity-label',
  styleUrl: 'geov-entity-label.css',
  // shadow: true,
})
export class GeovEntityLabel {
  @Prop({ reflect: true }) _happy_dom_id?: string;
  @Prop({ reflect: true }) _data_server_fetched?: boolean;
  @Element() private element: HTMLElement;
  constructor() {
    setHappyDomId(this);
  }

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

  @State() d?: GeovEntityLabelData;
  @State() msg: string;

  async componentWillLoad() {
    this.d = getHappyDomData(this._happy_dom_id);
    if (!this._data_server_fetched) {
      //   // parse data given by the @Prop 'data'
      //   this.parseDataProp();
      // } else {
      // fetch data via http
      this.d = { loading: true };

      const t = startHappyDomTask();

      await this.fetchData()
        .then(d => {
          this.d = d;
          if (Build.isServer) {
            this._data_server_fetched = true;
          }
          setHappyDomData(d, this._happy_dom_id, this.element);
          endHappyDomTask(t);
          return d;
        })
        .catch(d => {
          this.d = d;
          return d;
        });
    }
  }

  // @Watch('data')
  // parseDataProp() {
  //   if (this.data) {
  //     if (typeof this.data === 'string') this.d = JSON.parse(this.data);
  //     else this.d = { ...this.data };
  //   }
  // }

  /**
   * does the sparql request(s)
   * @returns a Promise with the data for this component
   */
  @Method()
  async fetchData(): Promise<GeovEntityLabelData> {
    return sparqlJson<{ o: SparqlBinding<string> }>(this.sparqlEndpoint, qrLabel(this.entityId))
      .then(res => {
        return {
          ...this.d,
          label: res?.results?.bindings?.[0]?.o?.value,
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
        {this.d.label}
        {this.d.loading ? `loading...` : ``}
        {this.d.error ? `error!` : ``}
        {!this.d.label && !this.d.loading && !this.d.error ? <span class="no-label-found">no label found</span> : ``}
        <slot />
      </Host>
    );
  }
}

import { Component, h, Host, Prop, State } from '@stencil/core';
import { FetchResponse } from '../../lib/FetchResponse';
import { SparqlBinding, sparqlJson } from '../../lib/sparqlJson';
import { getSSRData } from '../../lib/ssr/getSSRData';
import { setSSRData } from '../../lib/ssr/setSSRData';
import { setSSRId } from '../../lib/ssr/setSSRId';

export interface GeovIfData extends FetchResponse {
  showChildren: boolean;
  error?: boolean;
}

@Component({
  tag: 'geov-if',
  styleUrl: 'geov-if.css',
  shadow: false,
})
export class GeovIf {
  @Prop({ reflect: true }) _ssrId?: string;
  /**
   * sparqlEndpoint
   * URL of the sparql endpoint
   */
  @Prop() sparqlEndpoint: string;
  /**
   * A sparql query with binding ?condition of type ^^xsd:bolean.
   * If the first ?condition of response is true,
   * the children of the element are rendered, otherwise not.
   *
   * Example:
   * ```sparql
   * # check if geov:i836507 is annotated entity (ontome:p1875)
   * # of an annotation in text (ontome:p1875)
   * PREFIX ontome: <https://ontome.net/ontology/>
   * PREFIX geov: <http://geovistory.org/resource/>
   *
   * SELECT  ((count(?subject ) > 0)as ?condition)
   * WHERE {
   *   ?subject ontome:p1875 geov:i836507 .
   *   ?subject a ontome:c933
   * }
   * GROUP BY ?subject
   * LIMIT 1
   * ```
   */
  @Prop() sparqlQuery: string;

  /**
   * the data (or model) used in the view
   */
  @State() data: GeovIfData = { loading: true, showChildren: false };

  constructor() {
    setSSRId(this);
  }

  async componentWillLoad() {
    // try to get data from ssr
    this.data = getSSRData(this._ssrId);

    // if no data found, fetchData
    if (!this.data) {
      // set data to loading (in immutable way)
      this.data = { loading: true, showChildren: false };

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
  async fetchData(): Promise<GeovIfData> {
    const q = this.sparqlQuery
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&apos;/g, "'");
    return sparqlJson<{ condition: SparqlBinding<string> }>(this.sparqlEndpoint, q)
      .then(res => {
        const showChildren = res?.results?.bindings?.[0]?.condition?.value === 'true' ? true : false;
        return {
          ...this.data,
          showChildren,
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

    const display = this.data.showChildren ? 'initital' : 'none';

    return (
      <Host>
        <div style={{ display: display }}>
          <slot></slot>
        </div>
      </Host>
    );
  }
}

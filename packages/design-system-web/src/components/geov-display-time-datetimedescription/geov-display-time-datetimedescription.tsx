/* eslint-disable prettier/prettier */
import { Component, Host, h, Prop, State, Method } from '@stencil/core';
import { getSSRData } from '../../lib/ssr/getSSRData';
import { setSSRData } from '../../lib/ssr/setSSRData';
import { setSSRId } from '../../lib/ssr/setSSRId';
import { FetchResponse } from '../../lib/FetchResponse';
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

export interface DateData extends FetchResponse {
  year?: string;
  month?: string;
  day?: string;
  error?: boolean;
}

@Component({
  tag: 'geov-display-time-datetimedescription',
  shadow: true,
})
export class GeovDisplayTimeDatetimedescription {
  /**
   * _ssrId is short for server side rendering id and
   * identifies this component and the fetched data
   * respectively. Set this only if you want to
   * enable this component to fetch serve side
   */
  @Prop({ reflect: true }) _ssrId?: string;
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
  /*
   * fetchBeforRender
   * if true, componentWillLoad() returns a promise for the loading of all data [default: true]
   */
  @Prop() fetchBeforeRender = true;

  @State() data?: DateData;

  constructor() {
    setSSRId(this);
  }

  async componentWillLoad() {
    if (this.fetchBeforeRender) {
      /**
       * try to get data from ssr
       */
      this.data = getSSRData(this._ssrId);
    }

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
    }
  }

  /**
   * Do the sparql request(s)
   * @returns a Promise with the data for this component
   */
  @Method()
  async fetchData(): Promise<DateData> {
    let d: DateData = { loading: true };
    await sparqlJson<DateBinding>(this.sparqlEndpoint, qrPropertiesDateTimeDescription(this.entityId))
      .then(res => {
        res?.results?.bindings.forEach(b => {
          const txt = b.object.value;
          const numb = txt.replace(/\D/g, ''); //Remove the superfluous and keep the number
          if (b.predicate.value == 'http://www.w3.org/2006/time#day') {
            d.day = numb;
          }
          if (b.predicate.value == 'http://www.w3.org/2006/time#month') {
            d.month = numb;
          }
          if (b.predicate.value == 'http://www.w3.org/2006/time#year') {
            d.year = numb;
          }
        });
      })
      .catch(_ => {
        d = {
          loading: false,
          error: true,
        };
      });
    return d;
  }

  render() {
    return (
      <Host>
        {this.data.year}-{this.data.month}-{this.data.day}
        <slot></slot>
      </Host>
    );
  }
}

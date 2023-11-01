import { Component, Fragment, Prop, State, h } from '@stencil/core';
import { FetchResponse } from '../../lib/FetchResponse';
import { SparqlBinding, sparqlJson } from '../../lib/sparqlJson';
import { getSSRData } from '../../lib/ssr/getSSRData';
import { setSSRData } from '../../lib/ssr/setSSRData';
import { setSSRId } from '../../lib/ssr/setSSRId';
const qr = (entityUri: string) => `
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
    PREFIX owl: <http://www.w3.org/2002/07/owl#>
    PREFIX xml: <http://www.w3.org/XML/1998/namespace>
    PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
    PREFIX geo: <http://www.opengis.net/ont/geosparql#>
    PREFIX time: <http://www.w3.org/2006/time#>
    PREFIX ontome: <https://ontome.net/ontology/>
    PREFIX geov: <http://geovistory.org/resource/>

    SELECT
      ?predicate # predicate uri
      (SAMPLE(?y) as ?year)
      (SAMPLE(?m) as ?month)
      (SAMPLE(?d) as ?day)
      (SAMPLE(?tUnit) as ?timeUnit)

    WHERE {

      # Innermost subquery:
      {
        # Select all properties of entity, group by predicate
        # and select one sample object per predicate
        SELECT ?predicate (sample(?o) as ?object) WHERE {
          <${entityUri}> ?predicate ?o.
        }
        GROUP BY ?predicate
      }.

  	  # Left year, month, day
      OPTIONAL { ?object time:year ?y }.
      OPTIONAL { ?object time:month ?m }.
      OPTIONAL { ?object time:day ?d }.
      OPTIONAL { ?object time:unitType ?tUnit }.
  }

  GROUP BY ?predicate ?object
  # limit to max 50 predicate groups
  LIMIT 50`;

interface Row {
  predicate: SparqlBinding;
  year?: SparqlBinding;
  month?: SparqlBinding;
  day?: SparqlBinding;
  timeUnit?: SparqlBinding;
}
interface Data extends FetchResponse {
  rows?: Row[];
  error?: boolean;
}
interface TimeInfo {
  year?: number;
  month?: number;
  day?: number;
  timeUnit: string;
}

/**
 * This component queries and renders the dates of a time span as readable string
 *
 * - In case there are mutiple dates, the output is {earliest} – {latest}: `1739-11-25 – 1740-07-08`
 * - In case there is one date, the output is {date}: `1739-11-25`
 * - In case there is no date, the output is empty
 *
 * Remark: The predicates from Time Span to Date, like `crm:P81b begin of the end`, are not taken into account for
 * the retrieval of {earliest} and {latest}.
 *
 * @param rows
 */
@Component({
  tag: 'geov-time-span',
  styleUrl: 'geov-time-span.css',
  shadow: true,
})
export class GeovTimeSpan {
  /**
   * declares an _ssrId property that is reflected as attribute
   */
  @Prop({ reflect: true }) _ssrId?: string;
  /**
   * declares data as state
   */
  @State() data?: Data;
  /**
   * if true, componentWillLoad() returns a promise for the loading of all data [default: true]
   */
  @Prop() fetchBeforeRender = true;
  /**
   * sparqlEndpoint
   * URL of the sparql endpoint
   */
  @Prop() sparqlEndpoint: string;
  /**
   * entityId
   * Uri of subject, e.g. 'http://www.geovistory.org/ressource/iXXX'
   */
  @Prop() entityUri: string;

  /*
   * assigns an id to the component
   */
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
      this.data = {
        loading: true,
      };

      // fetch data via http
      await this.fetchData() // <- await this promise!

        .then(d => {
          // filter language
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
  async fetchData(): Promise<Data> {
    let d: Data = {
      loading: true,
    };

    const query = qr(this.entityUri);
    await sparqlJson<Row>(this.sparqlEndpoint, query)
      .then(res => {
        d = {
          loading: false,
          rows: res?.results?.bindings,
        };
      })
      .catch(_ => {
        d = {
          loading: false,
          error: true,
        };
      });

    return d;
  }
  /**
   * Converts the rows into a readable string
   *
   * In case there are mutiple dates, the output is {earliest} – {latest}:
   * 1739-11-25 – 1740-07-08
   *
   * In case there is one date, the output is {date}:
   * 1739-11-25
   *
   * In case there is no date, the output is empty
   *
   * @param rows
   */
  rowsToString(rows: Row[]) {
    const timeInfos = rows
      // map rows to year month time
      .map(r => this.getTime(r))
      // filter items with time info
      .filter(timeInfo => !!timeInfo.timeUnit)
      // sort earliest date first
      .sort((a, b) => {
        // Compare years
        if (a.year !== b.year) {
          return a.year - b.year;
        }

        // Compare months
        if (a.month !== b.month) {
          return a.month - b.month;
        }

        // Compare days
        return a.day - b.day;
      });

    // return if we have no time info
    if (timeInfos.length === 0) return;

    const earliest = timeInfos[0];
    const latest = timeInfos[timeInfos.length - 1];

    if (earliest === latest) return this.timeInfoToString(earliest);

    return `${this.timeInfoToString(earliest)} – ${this.timeInfoToString(latest)}`;
  }
  /**
   * Extracts TimeInfo from a Row
   */
  getTime(row: Row): TimeInfo {
    return {
      year: parseInt(row.year?.value),
      month: parseInt(row.month?.value?.replace('--', '')),
      day: parseInt(row.day?.value?.replace('---', '')),
      timeUnit: row.timeUnit?.value,
    };
  }
  /**
   * Converts a timeInfo to a string
   * @param timeInfo
   * @returns
   */
  timeInfoToString(timeInfo: TimeInfo) {
    switch (timeInfo.timeUnit) {
      case 'http://www.w3.org/2006/time#unitYear':
        return `${timeInfo.year}`;
      case 'http://www.w3.org/2006/time#unitMonth':
        return `${timeInfo.year}.${timeInfo.month.toString().padStart(2, '0')}`;
      case 'http://www.w3.org/2006/time#unitDay':
      default:
        return `${timeInfo.year}.${timeInfo.month.toString().padStart(2, '0')}.${timeInfo.day.toString().padStart(2, '0')}`;
    }
  }
  render() {
    return <Fragment>{this.rowsToString(this.data.rows)}</Fragment>;
  }
}

import { Color } from '@ionic/core';
import { Component, Event, EventEmitter, h, Host, Prop, State } from '@stencil/core';
import { openOutline } from 'ionicons/icons';
import { GeovPaginatorCustomEvent } from '../../components';
import { FetchResponse } from '../../lib/FetchResponse';
import { regexReplace } from '../../lib/regexReplace';
import { SparqlBinding, sparqlJson } from '../../lib/sparqlJson';
import { getSSRData } from '../../lib/ssr/getSSRData';
import { setSSRData } from '../../lib/ssr/setSSRData';
import { setSSRId } from '../../lib/ssr/setSSRId';
import { PageEvent } from '../geov-paginator/geov-paginator';

const qrProps = (predicateId: string, objectId: string, pageSize: number, offset: number, language: string) => `
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX xml: <http://www.w3.org/XML/1998/namespace>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX geo: <http://www.opengis.net/ont/geosparql#>
PREFIX time: <http://www.w3.org/2006/time#>
PREFIX ontome: <https://ontome.net/ontology/>
PREFIX geov: <http://geovistory.org/resource/>

SELECT DISTINCT ?entity ?entityLabel ?entityType ?entityTypeLabel ?dt
WHERE {
  geov:${objectId} <${predicateId}> ?entity .
  OPTIONAL {?entity rdfs:label ?entityLabel . FILTER(LANG(?entityLabel) IN ("${language}", "en")) .}
  OPTIONAL {?entity rdf:type ?entityType . OPTIONAL {?entityType rdfs:label ?entityTypeLabel . FILTER(LANG(?entityTypeLabel) IN ("${language}", "en")) .}}
  BIND (datatype(?entity) AS ?dt) .
}
LIMIT ${pageSize} OFFSET ${offset}
`;

interface Bindings {
  entity: SparqlBinding;
  entityLabel?: SparqlBinding;
  entityType?: SparqlBinding;
  entityTypeLabel?: SparqlBinding;
  dt?: SparqlBinding;
  count: SparqlBinding;
}

export interface GeovEntityPropsByPredicateData extends FetchResponse {
  entities?: Bindings[];
  error?: boolean;
}

/**
 * This component fetches and displays a paginated list of properties
 * with a given subject and predicate.
 */
@Component({
  tag: 'geov-entity-props-by-predicate',
  styleUrl: 'geov-entity-props-by-predicate.css',
  shadow: true,
})
export class GeovEntityPropsByPredicate {
  /**
   * declares an _ssrId property that is reflected as attribute
   */
  @Prop({ reflect: true }) _ssrId?: string;
  /**
   * declares data as state
   */
  @State() data?: GeovEntityPropsByPredicateData;
  /**
   * if true, componentWillLoad() returns a promise for the loading of all data [default: true]
   */
  @Prop() fetchBeforeRender = true;
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
  /**
   * totalCount
   * Total number of entity from this property
   */
  @Prop() totalCount: number;
  /**
   * pageSize
   * Page size if too many resultat for a property, default 3
   */
  @Prop() pageSize = 3;
  /**
   * language
   * prints the label with the language or english, if not found, e.g. 'en'
   */
  @Prop() language: string;
  /**
   * predicateUri
   * URI of the predicate
   */
  @Prop() predicateUri: string;
  /**
   * predicateLabel
   * Label of the predicate
   */
  @Prop() predicateLabel?: string;
  /**
   * uriRegex
   * Optional regex with capturing groups to transform
   * the uri into the desired url. To use together
   * with uriReplace.
   */
  @Prop() uriRegex?: string;
  /**
   * uriReplace
   * String used to replace the uriRegex.
   *
   * Example (pseudo code):
   * const uriRegex = (http:\/\/geovistory.org\/)(.*)
   * const uriReplace = "http://dev.geovistory.org/resource/$2?p=123"
   * http://geovistory.org/resource/i54321 => http://dev.geovistory.org/resource/54321?p=123
   */
  @Prop() uriReplace?: string;

  @Prop() color: Color = '';

  /**
   * pageIndex
   * Index of the page. By default: 0 = First page.
   */
  @State() pageIndex = 0;
  /**
   * entities
   * Binding of resultats from query
   */
  @State() entities: Bindings[];
  /**
   * pageChanged
   * Listener of change page
   */
  @Event() pageChanged: EventEmitter<PageEvent>;

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

    // if no data found (or fetchBeforeRender is false), fetchData
    if (!this.data) {
      // set data to loading (in immutable way)
      this.data = { loading: true };

      await this.pageReload()
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

  changePage(pageEvent: GeovPaginatorCustomEvent<PageEvent>) {
    this.pageIndex = pageEvent.detail.pageIndex;
    this.data = { loading: true };
    this.pageReload()
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

  async pageReload(): Promise<GeovEntityPropsByPredicateData> {
    const qr = qrProps(this.predicateUri, this.entityId, this.pageSize, this.pageIndex * this.pageSize, this.language);

    return sparqlJson<Bindings>(this.sparqlEndpoint, qr)
      .then(res => {
        return {
          entities: res?.results?.bindings,
          loading: false,
        };
      })
      .catch(_ => {
        return {
          error: true,
          loading: false,
        };
      });
  }

  render() {
    const showPaginator = this.totalCount > this.pageSize;
    //const contentMinHeight = showPaginator ? this.pageSize * 62 : 0;
    return (
      <Host>
        <ion-grid fixed={true}>
          {/* List */}
          <ion-item class="heading" color={this.color} lines="full">
            <a class="propertyLabel" href={this.predicateUri.endsWith('i') ? this.predicateUri.slice(0, -1) : this.predicateUri}>
              {this.predicateLabel}
            </a>
            {showPaginator && this.renderPaginator()}
          </ion-item>
          <ion-list lines="full">{this.data?.entities?.map(entity => this.renderItem(entity))}</ion-list>
          {/* Paginator */}
        </ion-grid>
      </Host>
    );
  }
  private renderItem(item: Bindings): Element {
    const isUri = item.entity.type === 'uri';
    if (isUri) {
      return this.renderUri(item);
    }

    return (
      <ion-item>
        <ion-label>{this.renderLiteral(item)}</ion-label>
      </ion-item>
    );
  }

  private renderUri(item: Bindings) {
    const klass = item.entityType?.value;
    switch (klass) {
      case undefined:
        return this.renderExternalUri(item);

      // here you can add more class-specific renderings

      default:
        return this.renderGenericEntity(item);
    }
  }

  private renderExternalUri(item: Bindings) {
    const regex = this.uriRegex;
    const replace = this.uriReplace;
    const url = regexReplace(item.entity.value, regex, replace);
    const isInternal = url.includes('geovistory.org');
    const target = isInternal ? '' : '_blank';
    const detailIcon = isInternal ? undefined : openOutline;
    return (
      <ion-item color={this.color} href={url} target={target} detailIcon={detailIcon}>
        {item.entityLabel?.value ? <p>{item.entityLabel?.value}</p> : <p>{item.entity?.value}</p>}
      </ion-item>
    );
  }

  private renderGenericEntity(item) {
    return (
      <ion-item>
        <geov-list-item-nested-properties
          sparqlEndpoint={this.sparqlEndpoint}
          entityUri={item.entity.value}
          language="en"
          fetchBeforeRender={this.fetchBeforeRender}
        ></geov-list-item-nested-properties>
      </ion-item>
    );
  }

  private renderPaginator(): Element {
    return (
      <geov-paginator
        color={this.color}
        length={this.totalCount}
        pageSize={this.pageSize}
        pageIndex={this.pageIndex}
        onPageChanged={ev => this.changePage(ev)}
        showFirstLastButtons={false}
      ></geov-paginator>
    );
  }
  private renderLiteral(item: Bindings) {
    switch (item.dt?.value) {
      case 'http://www.opengis.net/ont/geosparql#wktLiteral':
        return <geov-display-geosparql-wktliteral color={this.color} value={item.entity?.value}></geov-display-geosparql-wktliteral>;
      case 'http://www.w3.org/1999/02/22-rdf-syntax-ns#langString':
      case 'http://www.w3.org/2001/XMLSchema#string':
      default:
        return (
          <geov-display-string-literal
            color={this.color}
            modalTitle={this.predicateLabel}
            label={item.entity?.value}
            language={item.entity?.['xml:lang']}
          ></geov-display-string-literal>
        );
    }
  }
}

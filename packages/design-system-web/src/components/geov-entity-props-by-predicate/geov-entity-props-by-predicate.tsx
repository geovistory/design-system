import { Component, Host, h, Prop, State, EventEmitter, Event } from '@stencil/core';
import { GeovPaginatorCustomEvent } from '../../components';
import { SparqlBinding, sparqlJson } from '../../lib/sparqlJson';
import { PageEvent } from '../geov-paginator/geov-paginator';

const qrOutgoingProps = (predicateId: string, objectId: string, pageSize: number, offset: number) => `
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
  OPTIONAL {?entity rdfs:label ?entityLabel .}
  OPTIONAL {?entity rdf:type ?entityType . OPTIONAL {?entityType rdfs:label ?entityTypeLabel .}}
  BIND (datatype(?entity) AS ?dt) .
}
LIMIT ${pageSize} OFFSET ${offset}
`;

const qrIncomingProps = (predicateId: string, objectId: string, pageSize: number, offset: number) => `
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
  ?entity <${predicateId}> geov:${objectId} .
  OPTIONAL {?entity rdfs:label ?entityLabel .}
  OPTIONAL {?entity rdf:type ?entityType . OPTIONAL {?entityType rdfs:label ?entityTypeLabel .}}
}
LIMIT ${pageSize} OFFSET ${offset}
`;

interface Bindings {
  entity: SparqlBinding;
  entityLabel?: SparqlBinding;
  entityType?: SparqlBinding;
  entityTypeLabel?: SparqlBinding;
  count: SparqlBinding;
}

@Component({
  tag: 'geov-entity-props-by-predicate',
  styleUrl: 'geov-entity-props-by-predicate.css',
  shadow: true,
})
export class GeovEntityPropsByPredicate {
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
   * isOutgoing
   * determine if this property is outgoing or incoming
   */
  @Prop() isOutgoing: boolean;
  /**
   * totalCount
   * Total number of entity from this property
   */
  @Prop() totalCount: number;
  /**
   * pageSize
   * Page size if too many resultat for a property, default 10
   */
  @Prop() pageSize = 10;
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

  async componentWillLoad() {
    this.pageReload();
  }

  changePage(pageEvent: GeovPaginatorCustomEvent<PageEvent>) {
    this.pageIndex = pageEvent.detail.pageIndex;
    this.pageReload();
  }

  pageReload() {
    let qr: string;
    if (this.isOutgoing) {
      qr = qrOutgoingProps(this.predicateUri, this.entityId, this.pageSize, this.pageIndex);
    } else {
      qr = qrIncomingProps(this.predicateUri, this.entityId, this.pageSize, this.pageIndex);
    }
    sparqlJson<Bindings>(this.sparqlEndpoint, qr).then(res => {
      this.entities = res?.results?.bindings;
    });
  }

  render() {
    return (
      <Host>
        <ion-list>
          <ion-item color="light" lines="none">
            <ion-label>
              {this.predicateLabel} {this.totalCount && this.totalCount > this.pageSize ? '(' + this.totalCount + ')' : ''}
            </ion-label>
          </ion-item>
          {this.entities?.map(entity => (
            <ion-item lines="none" href={entity.entity.value}>
              {entity.entity?.datatype == 'http://www.opengis.net/ont/geosparql#wktLiteral' ? (
                <ion-label>
                  <geov-display-geosparql-wktliteral value={entity.entity?.value}></geov-display-geosparql-wktliteral>
                </ion-label>
              ) : entity.entityType?.value == 'http://www.w3.org/2006/time#DateTimeDescription' ? (
                <ion-label>
                  <h2>
                    <geov-display-time-datetimedescription
                      entityId={entity.entity?.value.replace('http://geovistory.org/resource/', '')}
                      sparqlEndpoint={this.sparqlEndpoint}
                    ></geov-display-time-datetimedescription>
                  </h2>
                  <p>DateTimeDescription</p>
                </ion-label>
              ) : (
                <ion-label>
                  <h2>{entity.entityLabel?.value || '(no label)'}</h2>
                  <p>{entity.entityTypeLabel?.value}</p>
                </ion-label>
              )}
            </ion-item>
          ))}
          {this.totalCount && this.totalCount > 1 && (
            <ion-item lines="none">
              {this.totalCount > this.pageSize && ( // If there are exactly or less than 'pageSize' lines, no paginator is needed
                <geov-paginator length={this.totalCount} pageSize={this.pageSize} pageIndex={this.pageIndex} onPageChanged={ev => this.changePage(ev)}></geov-paginator>
              )}
            </ion-item>
          )}
        </ion-list>
        <slot></slot>
      </Host>
    );
  }
}

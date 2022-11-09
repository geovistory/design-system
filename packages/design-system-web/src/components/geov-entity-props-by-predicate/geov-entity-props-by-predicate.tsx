import { Component, Host, h, Prop, State, EventEmitter, Event } from '@stencil/core';
import { GeovPaginatorCustomEvent } from '../../components';
import { sparqlJson } from '../../lib/sparqlJson';
import { Binding } from '../geov-entity-properties/geov-entity-properties';
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

SELECT DISTINCT ?subject ?subjectLabel ?subjectType ?subjectTypeLabel ?dt
WHERE {
  geov:${objectId} <${predicateId}> ?subject .
  OPTIONAL {?subject rdfs:label ?subjectLabel .}
  OPTIONAL {?subject rdf:type ?subjectType . OPTIONAL {?subjectType rdfs:label ?subjectTypeLabel .}}
  BIND (datatype(?subject) AS ?dt) .
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

SELECT DISTINCT ?subject ?subjectLabel ?subjectType ?subjectTypeLabel ?dt
WHERE {
  ?subject <${predicateId}> geov:${objectId} .
  OPTIONAL {?subject rdfs:label ?subjectLabel .}
  OPTIONAL {?subject rdf:type ?subjectType . OPTIONAL {?subjectType rdfs:label ?subjectTypeLabel .}}
  BIND (datatype(?subject) AS ?dt) .
}
LIMIT ${pageSize} OFFSET ${offset}
`;

@Component({
  tag: 'geov-entity-props-by-predicate',
  styleUrl: 'geov-entity-props-by-predicate.css',
  shadow: true,
})
export class GeovEntityPropsByPredicate {
  /**
   * label
   */
  @Prop() entityId: string;
  /**
   * label
   */
  @Prop() props: Binding<string>;
  /**
   * label
   */
  @Prop() isOutgoing: boolean;
  /**
   * label
   */
  @Prop() pageSize = 10;
  /**
   * label
   */
  @Prop() sparqlEndpoint: string;
  /**
   * language
   * prints the label with the language or english, if not found, e.g. 'en'
   */
  @Prop() language: string;

  @State() properties: Binding<string>[];

  @State() pageIndex = 0;

  @Event() pageChanged: EventEmitter<PageEvent>;

  async componentWillLoad() {
    this.pageReload(this.isOutgoing);
  }

  changePage(pageEvent: GeovPaginatorCustomEvent<PageEvent>) {
    this.pageIndex = pageEvent.detail.pageIndex;
    this.pageReload(this.isOutgoing);
  }

  pageReload(isOutgoing: boolean) {
    let qr: string;
    if (isOutgoing) {
      qr = qrOutgoingProps(this.props.predicate.value, this.entityId, this.pageSize, this.pageIndex);
    } else {
      qr = qrIncomingProps(this.props.predicate.value, this.entityId, this.pageSize, this.pageIndex);
    }
    sparqlJson<Binding<string>>(this.sparqlEndpoint, qr).then(res => {
      this.properties = res?.results?.bindings;
    });
  }

  render() {
    return (
      <Host>
        <ion-list>
          <ion-item color="light" lines="none">
            <ion-label>
              {this.props.predicateLabel?.value} {this.props.count && Number(this.props.count?.value) > 10 ? '(' + this.props.count.value + ')' : ''}
            </ion-label>
          </ion-item>
          {this.properties?.map(property => {
            return (
              <ion-item lines="none" href={property.subject.value}>
                {property.subject?.datatype == 'http://www.opengis.net/ont/geosparql#wktLiteral' && (
                  <ion-label>
                    <geov-display-geosparl-wktliteral value={property.subject?.value}></geov-display-geosparl-wktliteral>
                  </ion-label>
                )}
                {property.subjectType?.value == 'http://www.w3.org/2006/time#DateTimeDescription' && (
                  <ion-label>
                    <h2>
                      <geov-display-time-datetimedescription
                        entityId={property.subject?.value.replace('http://geovistory.org/resource/', '')}
                        sparqlEndpoint={this.sparqlEndpoint}
                      ></geov-display-time-datetimedescription>
                    </h2>
                    <p>DateTimeDescription</p>
                  </ion-label>
                )}
                {property.subject?.datatype != 'http://www.opengis.net/ont/geosparql#wktLiteral' &&
                  property.subjectType?.value != 'http://www.w3.org/2006/time#DateTimeDescription' && (
                    <ion-label>
                      <h2>{property.subjectLabel?.value || '(no label)'}</h2>
                      <p>{property.subjectTypeLabel?.value}</p>
                    </ion-label>
                  )}
              </ion-item>
            );
          })}
          {this.props.count && Number(this.props.count.value) > 1 && (
            <ion-item lines="none">
              {Number(this.props.count?.value) > this.pageSize && ( // If there are exactly or less than 'pageSize' lines, no paginator is needed
                <geov-paginator
                  length={Number(this.props.count.value)}
                  pageSize={this.pageSize}
                  pageIndex={this.pageIndex}
                  onPageChanged={ev => this.changePage(ev)}
                ></geov-paginator>
              )}
            </ion-item>
          )}
        </ion-list>
        <slot></slot>
      </Host>
    );
  }
}

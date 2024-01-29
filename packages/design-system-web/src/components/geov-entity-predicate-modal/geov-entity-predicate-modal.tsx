import { Component, Host, h, Prop, State } from '@stencil/core';

/**
 * This component opens a modal displaying "Entity Props By Predicate".
 * The inputs are the ones of `geov-entity-props-by-predicate` plus an input for the modal title.
 */
@Component({
  tag: 'geov-entity-predicate-modal',
  styleUrl: 'geov-entity-predicate-modal.css',
  shadow: true,
})
export class GeovEntityPredicateModal {
  /**
   * Modal title
   */
  @Prop() modalTitle: string;
  /**
   * if true, componentWillLoad() returns a promise for the loading of all data [default: true]
   */
  @Prop() fetchBeforeRender = true;
  /**
   * entityUri
   * URI entity, e.g. 'http://geovistory.org/resource/i1234'
   */
  @Prop() entityUri: string;
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

  @State() modalIsOpen = false;

  modal: HTMLIonModalElement;
  content: HTMLIonContentElement;

  render() {
    return (
      <Host>
        <span onClick={() => this.open()}>
          <slot></slot>
        </span>
        <ion-modal ref={e => (this.modal = e)}>
          <ion-header>
            <ion-toolbar>
              <ion-buttons slot="start">
                <ion-button onClick={() => this.close()}>Close</ion-button>
              </ion-buttons>
              <ion-title>{this.modalTitle}</ion-title>
            </ion-toolbar>
          </ion-header>
          <ion-content ref={e => (this.content = e)} class="ion-padding">
            {this.modalIsOpen && (
              <geov-entity-props-by-predicate
                sparqlEndpoint={this.sparqlEndpoint}
                entityUri={this.entityUri}
                totalCount={this.totalCount}
                language={this.language}
                predicateUri={this.predicateUri}
                predicateLabel={this.predicateLabel}
                fetchBeforeRender={this.fetchBeforeRender}
              ></geov-entity-props-by-predicate>
            )}
          </ion-content>
        </ion-modal>
      </Host>
    );
  }

  open() {
    this.modal.present();
    this.modalIsOpen = true;
  }

  close() {
    this.modal.dismiss();
    this.modalIsOpen = false;
  }
}

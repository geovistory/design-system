import { Component, Host, h, Prop } from '@stencil/core';
import { Color } from '@ionic/core';
import { State } from '@stencil/core/internal';

@Component({
  tag: 'geov-entity-download-rdf',
  styleUrl: 'geov-entity-download-rdf.css',
  shadow: false,
})
export class GeovEntityDownloadRdf {
  /**
   * entityId
   * ID number of entity, e.g. 'i315800'
   */
  @Prop() entityId: string;
  /**
   * color
   * color of the button
   */
  @Prop() color?: Color;
  /**
   * expand
   * expand of the button
   */
  @Prop() expand?: 'block' | 'full';
  /**
   * fill
   * fill of the button
   */
  @Prop() fill?: 'clear' | 'outline' | 'solid' | 'default';
  /**
   * buttonLabel
   * Label of the button
   */
  @Prop() buttonLabel = 'Download RDF';
  /**
   * buttonIcon
   * Icon of the button
   */
  @Prop() buttonIcon = 'download-outline';
  /**
   * listFormat
   * List or RDF serialization format
   */
  @State() listFormat = {
    'RDF XML': 'rdf+xml',
    'JSON-LD': 'ld+json',
    'N-Triples': 'n-triples',
    'N-Quads': 'n-quads',
    'TRIX': 'trix+xml',
    'Thrift': 'rdf+thrift',
    'Turtle': 'turtle',
  };
  /**
   * File for download
   */
  @State() response: Blob;

  modal: HTMLIonModalElement;

  render() {
    return (
      <Host>
        <ion-button id="open-custom-dialog" expand={this.expand} fill={this.fill} color={this.color} onClick={() => (this.modal.isOpen = true)}>
          {this.buttonLabel} <ion-icon name={this.buttonIcon}></ion-icon>
        </ion-button>
        <ion-modal id="example-modal" trigger="open-custom-dialog" ref={element => (this.modal = element)} onWillDismiss={() => this.dismiss()}>
          <ion-header>
            <ion-toolbar>
              <ion-buttons slot="start">
                <ion-button onClick={() => this.dismiss()}>Cancel</ion-button>
              </ion-buttons>
              <ion-title>Download RDF</ion-title>
            </ion-toolbar>
          </ion-header>
          <ion-content class="ion-padding">
            <ion-list lines="none">{this.renderClickableItem()}</ion-list>
          </ion-content>
        </ion-modal>
        <slot></slot>
      </Host>
    );
  }
  open() {
    this.modal.isOpen = true;
  }
  dismiss() {
    this.modal.dismiss();
    this.modal.isOpen = false;
  }
  async fetchRDF(type) {
    const headers = new Headers({
      'Content-Type': 'application/' + type,
    });
    const response = await fetch('http://geovistory.org/resource/' + this.entityId, {
      method: 'GET',
      headers: headers,
      mode: 'cors',
      cache: 'default',
    });
    this.response = await response.blob();
    this.dismiss();
  }
  renderClickableItem() {
    return Object.entries(this.listFormat).map(([b, k]) => (
      <ion-item button={true} detail={false} onClick={() => this.fetchRDF({ k })} download="Download">
        <ion-icon name="download"></ion-icon>
        <ion-label>{b}</ion-label>
      </ion-item>
    ));
  }
}

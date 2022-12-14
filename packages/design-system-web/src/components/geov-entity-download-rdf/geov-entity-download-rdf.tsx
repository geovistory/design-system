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
  @State() listFormat: Record<string, string[]> = {
    'RDF XML': ['application/rdf+xml', '.rdf'],
    'JSON-LD': ['application/ld+json', '.jsonld'],
    'N-Triples': ['application/n-triples', '.nt'],
    'N-Quads': ['application/n-quads', '.nq'],
    'TRIX': ['application/trix+xml', '.trix'],
    'Thrift': ['application/rdf+thrift', '.thrift'],
    'Turtle': ['text/turtle', '.ttl'],
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
  async fetchRDF(format: string[]) {
    const headers = new Headers({
      Accept: format[0], //format[0] = Type
    });
    const url = 'https://www.geovistory.org/resource/';
    const response = await fetch(url + this.entityId, {
      method: 'GET',
      headers: headers,
      mode: 'cors',
      cache: 'default',
    });
    this.response = await response.blob();
    const a = document.createElement('a');
    a.href = URL.createObjectURL(this.response);
    a.download = this.entityId + format[1]; //format[1] = Extension file
    a.click();
    this.dismiss();
  }
  renderClickableItem() {
    return Object.entries(this.listFormat).map(([a, b]) => (
      <ion-item button={true} detail={false} onClick={() => this.fetchRDF(b)} download="Download">
        <ion-icon name="download"></ion-icon>
        <ion-label>{a}</ion-label>
      </ion-item>
    ));
  }
}

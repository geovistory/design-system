import type { Color } from '@ionic/core';
import { Component, h, Host, Prop, State } from '@stencil/core';
import { downloadOutline } from 'ionicons/icons';

/**
 * This component is a UI to fetch and download the RDF of a given Geovistory entity id.
 * It allows to choose one of the following rdf syntaxes:
 *
 * - RDF XML
 * - JSON-LD
 * - N-Triples
 * - N-Quads
 * - TRIX
 * - Thrift
 * - Turtle
 *
 */
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
   * projectId
   * ID number of project, e.g. '123123'
   */
  @Prop() projectId: number | undefined;
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
  @Prop() buttonIcon?: string = downloadOutline;
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

  open() {
    this.modal.present();
  }
  dismiss() {
    this.modal.dismiss();
  }

  async fetchRDF(format: string[]) {
    const headers = new Headers({
      Accept: format[0], //format[0] = Type
    });
    let args = this.entityId;
    if (this.projectId != undefined) {
      args += '?p=' + this.projectId;
    }
    const url = 'https://www.geovistory.org/resource/';
    const response = await fetch(url + args, {
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
        {this.buttonIcon ? <ion-icon slot="start" icon={this.buttonIcon}></ion-icon> : <ion-icon slot="start" icon={downloadOutline}></ion-icon>}
        <ion-label>{a}</ion-label>
      </ion-item>
    ));
  }

  render() {
    return (
      <Host>
        <ion-button expand={this.expand} fill={this.fill} color={this.color} onClick={() => this.open()}>
          {this.buttonLabel} {this.buttonIcon ? <ion-icon icon={this.buttonIcon}></ion-icon> : <ion-icon icon={downloadOutline}></ion-icon>}
        </ion-button>
        <ion-modal ref={element => (this.modal = element)} onWillDismiss={() => this.dismiss()} isOpen={false}>
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
}

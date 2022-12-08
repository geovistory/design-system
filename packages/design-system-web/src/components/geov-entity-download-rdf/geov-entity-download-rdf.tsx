import { Component, Host, h, Prop } from '@stencil/core';
import { downloadOutline } from 'ionicons/icons';

@Component({
  tag: 'geov-entity-download-rdf',
  styleUrl: 'geov-entity-download-rdf.css',
  shadow: true,
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
  @Prop() color = 'primary';
  /**
   * expand
   * expand of the button
   */
  @Prop() expand: 'block' | 'full';
  /**
   * fill
   * fill of the button
   */
  @Prop() fill: 'clear' | 'outline' | 'solid' | 'default';

  modal: HTMLIonModalElement;

  render() {
    return (
      <Host>
        <ion-modal id="example-modal" trigger="open-custom-dialog" ref={element => (this.modal = element)}>
          <ion-header>
            <ion-toolbar>
              <ion-buttons slot="start">
                <ion-button onClick={() => this.dismiss()}>Cancel</ion-button>
              </ion-buttons>
              <ion-title>Download RDF</ion-title>
            </ion-toolbar>
          </ion-header>
          <ion-content class="ion-padding">
            <ion-item>
              <ion-label>RDF XML</ion-label>
              <ion-button slot="end">
                <ion-icon slot="icon-only" icon={downloadOutline} size="small"></ion-icon>
              </ion-button>
            </ion-item>
          </ion-content>
        </ion-modal>
        <slot></slot>
      </Host>
    );
  }
  dismiss() {
    this.modal.dismiss();
  }
}

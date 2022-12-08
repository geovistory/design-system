import { Component, Host, h, Prop } from '@stencil/core';

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

  render() {
    return (
      <Host>
        <slot>
          <ion-button id="click-trigger">
            Download RDF <ion-icon name="download-outline"></ion-icon>
          </ion-button>
          <ion-popover trigger="click-trigger" trigger-action="hover">
            <ion-content class="ion-padding">Hello World!</ion-content>
          </ion-popover>
        </slot>
      </Host>
    );
  }
}

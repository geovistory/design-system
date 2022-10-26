import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'geov-property-list',
  styleUrl: 'geov-property-list.css',
  shadow: true,
})
export class GeovPropertyList {
   /**
   * label
   */
   @Prop() propertyLabel: string;
   /**
   * label
   */
   @Prop() entityLabel: string;
   /**
   * language
   * prints the label with the language or english, if not found, e.g. 'en'
   */
   @Prop() language: string;
   
  render() {
    return (
      <Host>
        <ion-list>
          <ion-item color="light" lines="none">
            <ion-label>{this.propertyLabel}</ion-label>
          </ion-item>
          <ion-item lines="none" href="" target="_blank">
            <ion-label>{this.entityLabel}</ion-label>
          </ion-item>
        </ion-list>
        <slot></slot>
      </Host>
    );
  }

}

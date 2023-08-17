import { Component, Host, h, State, Prop } from '@stencil/core';

const iconLabel = {
  'person': 'person-circle-outline',
  'geographicalplace': 'navigate-circle-outline',
  'group': 'people-circle-outline',
  'shipvoyage': 'boat-outline',
  'date-timedescription': 'calendar-outline',
  'text': 'document-text-outline',
};

/**
 * This component fetches and displays the class icon of a given Geovistory entity id.
 */
@Component({
  tag: 'geov-entity-class-icon',
  styleUrl: 'geov-entity-class-icon.css',
  shadow: true,
})
export class GeovEntityClassIcon {
  @Prop() type: string;

  @State() icon: string;

  componentWillLoad() {
    if (this.type != undefined && iconLabel[this.type] != undefined) {
      this.icon = iconLabel[this.type];
    }
  }

  render() {
    return (
      <Host>
        {this.icon && <ion-icon name={this.icon}></ion-icon>}
        <slot />
      </Host>
    );
  }
}

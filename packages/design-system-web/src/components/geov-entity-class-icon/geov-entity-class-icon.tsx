import { Component, Host, h, Prop } from '@stencil/core';
import { boatOutline, calendarOutline, documentTextOutline, navigateCircleOutline, peopleCircleOutline, personCircleOutline } from 'ionicons/icons';

const iconMap = {
  'https://ontome.net/ontology/c21': personCircleOutline, // Person
  'https://ontome.net/ontology/c363': navigateCircleOutline, // Geographical Place
  'https://ontome.net/ontology/c68': peopleCircleOutline, // Group
  'https://ontome.net/ontology/c523': boatOutline, // Ship Voyage
  'http://www.w3.org/2006/time#DateTimeDescription': calendarOutline, // Date Time Description
  'https://ontome.net/ontology/c785': documentTextOutline, // Text
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
  @Prop() classURI: string;

  render() {
    const icon = iconMap[this.classURI];

    return <Host>{icon && <ion-icon icon={icon}></ion-icon>}</Host>;
  }
}

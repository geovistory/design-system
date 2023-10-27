import { Component, Host, Prop, h } from '@stencil/core';
import {
  balloonOutline,
  boatOutline,
  briefcaseOutline,
  calendarClearOutline,
  calendarOutline,
  documentTextOutline,
  ellipseOutline,
  heartHalfOutline,
  locationOutline,
  peopleCircleOutline,
  peopleOutline,
  personCircleOutline,
  skullOutline,
  transgenderOutline,
} from 'ionicons/icons';

const iconMap = {
  'https://ontome.net/ontology/c21': personCircleOutline, // Person
  'https://ontome.net/ontology/c363': locationOutline, // Geographical Place
  'https://ontome.net/ontology/c68': peopleCircleOutline, // Group
  'https://ontome.net/ontology/c523': boatOutline, // Ship Voyage
  'https://ontome.net/ontology/c50': calendarClearOutline, // Time Span
  'http://www.w3.org/2006/time#DateTimeDescription': calendarOutline, // Date Time Description
  'https://ontome.net/ontology/c785': documentTextOutline, // Text
  'https://ontome.net/ontology/c63': skullOutline, // Death
  'https://ontome.net/ontology/c61': balloonOutline, // Birth
  'https://ontome.net/ontology/c633': heartHalfOutline, // Relationship
  'https://ontome.net/ontology/c442': peopleOutline, // Membership
  'https://ontome.net/ontology/c636': briefcaseOutline, // Occupation
  'https://ontome.net/ontology/c629': transgenderOutline, // Gender
};
const defaultIcon = ellipseOutline;

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
    const icon = iconMap[this.classURI] ?? defaultIcon;

    return <Host>{icon && <ion-icon icon={icon}></ion-icon>}</Host>;
  }
}

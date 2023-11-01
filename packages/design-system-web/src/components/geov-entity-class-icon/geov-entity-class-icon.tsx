import { Component, Host, Prop, h } from '@stencil/core';
import {
  balloonOutline,
  boatOutline,
  briefcaseOutline,
  calendarClearOutline,
  calendarOutline,
  chatbubbleEllipsesOutline,
  documentTextOutline,
  earthOutline,
  ellipseOutline,
  heartHalfOutline,
  locationOutline,
  peopleOutline,
  personOutline,
  skullOutline,
  starOutline,
  transgenderOutline,
} from 'ionicons/icons';

const iconMap = {
  'https://ontome.net/ontology/c21': personOutline, // Person
  'https://ontome.net/ontology/c363': locationOutline, // Geographical Place
  'https://ontome.net/ontology/c68': peopleOutline, // Group
  'https://ontome.net/ontology/c523': boatOutline, // Ship Voyage
  'https://ontome.net/ontology/c50': calendarClearOutline, // Time Span
  'http://www.w3.org/2006/time#DateTimeDescription': calendarOutline, // Date Time Description
  'https://ontome.net/ontology/c785': documentTextOutline, // Text
  'https://ontome.net/ontology/c63': skullOutline, // Death
  'https://ontome.net/ontology/c61': balloonOutline, // Birth
  'https://ontome.net/ontology/c633': heartHalfOutline, // Relationship
  'https://ontome.net/ontology/c442': peopleOutline, // Membership
  'https://ontome.net/ontology/c629': transgenderOutline, // Gender
  'https://ontome.net/ontology/c697': briefcaseOutline, // Embodiment
  'https://ontome.net/ontology/c698': briefcaseOutline, // Actors social role
  'https://ontome.net/ontology/c213': briefcaseOutline, // Social Quality of an actor
  'https://ontome.net/ontology/c444': briefcaseOutline, // Actors social quality
  'https://ontome.net/ontology/c636': briefcaseOutline, // Occupation
  'https://ontome.net/ontology/c637': briefcaseOutline, // Occupation (Temporal entity)
  'https://ontome.net/ontology/c5': starOutline, // Event
  'https://ontome.net/ontology/c535': starOutline, // Participation
  'https://ontome.net/ontology/c933': documentTextOutline, // Annotation in Text
  'https://ontome.net/ontology/c84': earthOutline, // Georeference
  'https://ontome.net/ontology/c868': chatbubbleEllipsesOutline, // Person Apppellation in a Language
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

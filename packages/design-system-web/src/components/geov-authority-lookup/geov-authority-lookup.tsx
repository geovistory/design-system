import { Component, Host, Prop, State, Event, h, EventEmitter } from '@stencil/core';
import { ItemSelectedEvent } from '../geov-authority-lookup-explorer/geov-authority-lookup-explorer';

/**
 * This component allows searching for entities in Wikidata, GND, and IdRef. Users can enter a string and optionally choose a type/class. Once the desired entity is found, its URI can be copied to the clipboard or outputted through a DOM event.
 *
 * Supported Authority Files:
 *
 * - [Wikidata](https://www.wikidata.org/) is a free and collaborative knowledge graph that serves as a central repository of structured data for Wikimedia projects, including Wikipedia.
 * - [GND](https://www.dnb.de/DE/Professionell/Standardisierung/GND/gnd_node.html), which stands for "Gemeinsame Normdatei" in German, is an authority file used in libraries, archives, and museums in German-speaking countries. It is maintained cooperatively by the German National Library, the Austrian National Library, the Swiss National Library, and other institutions.
 * - [IdRef](https://www.idref.fr/) is a French authority file that serves as a reference for identifying and managing bibliographic data related to persons, organizations, and works. It is maintained by the Bibliographic Agency for Higher Education (ABES) in France.
 *
 * The component has a rich API for customization and styling, see below.
 *
 * Search and select an entity. Open the console to see the selected URI in the logs.
 *
 */
@Component({
  tag: 'geov-authority-lookup',
  styleUrl: 'geov-authority-lookup.css',
  shadow: true,
})
export class GeovAuthorityLookup {
  /**
   * APIs to use
   */
  @Prop() apis: string[] = ['gnd', 'idref', 'wikidata'];

  /**
   * The list of types
   */
  @Prop() types: string[] = ['All', 'Person', 'Place', 'Group'];

  /**
   * The maximum number of occurrences per api
   */
  @Prop() nbOccurencesMax = 5;

  /**
   * To show or hide the selection button
   */
  @Prop() displaySelectBtn = true;

  /**
   * To show or hide the open button
   */
  @Prop() displayOpenBtn = true;

  /**
   * To show or hide the copy button
   */
  @Prop() displayCopyBtn = false;

  /**
   * The maximum number of columns in the webcomponent
   */
  @Prop() nbColMax = 3;

  /**
   * The initial keywords
   */
  @Prop() initSearch: string;

  /**
   * The initial type
   */
  @Prop() initSearchType: string;

  @State() keywords = '';

  @State() type = '';

  @State() classForceCol = '';

  /**
   * Event emitted when the select button has been clicked.
   */
  @Event()
  selected: EventEmitter<ItemSelectedEvent>;

  componentWillLoad() {
    if (this.initSearch && this.initSearch.trim() != '') {
      this.keywords = this.initSearch.trim();
    }
    if (this.initSearchType && this.initSearchType.trim() != '') {
      this.type = this.initSearchType.trim();
    }

    if (this.nbColMax == 2) {
      this.classForceCol = 'forceCol2';
    } else if (this.nbColMax == 1) {
      this.classForceCol = 'forceCol1';
    } else {
      this.classForceCol = '';
    }
  }

  render() {
    return (
      <Host>
        <ion-grid>
          <ion-row>
            <ion-col>
              <ion-searchbar
                value={this.keywords}
                debounce={500}
                onIonChange={e => {
                  this.keywords = e.detail.value;
                }}
              ></ion-searchbar>
            </ion-col>
            <ion-col>
              <ion-list>
                <ion-item>
                  <ion-select
                    value={this.type}
                    aria-label="type"
                    placeholder="Select type"
                    onIonChange={e => {
                      this.type = e.detail.value;
                    }}
                  >
                    {this.types && this.types.map(item => <ion-select-option value={item}>{item}</ion-select-option>)}
                  </ion-select>
                </ion-item>
              </ion-list>
            </ion-col>
          </ion-row>
        </ion-grid>
        <div class="containerResponsive">
          <ion-grid class={this.classForceCol}>
            <ion-row>
              {this.keywords.length
                ? this.apis?.map(item => (
                    <ion-col size="1">
                      <geov-authority-lookup-explorer
                        api={item}
                        keywords={this.keywords}
                        type={this.type}
                        nbOccurencesMax={this.nbOccurencesMax}
                        displayCopyBtn={this.displayCopyBtn}
                        displayOpenBtn={this.displayOpenBtn}
                        displaySelectBtn={this.displaySelectBtn}
                      ></geov-authority-lookup-explorer>
                    </ion-col>
                  ))
                : ''}
            </ion-row>
          </ion-grid>
        </div>
        <slot></slot>
      </Host>
    );
  }
}

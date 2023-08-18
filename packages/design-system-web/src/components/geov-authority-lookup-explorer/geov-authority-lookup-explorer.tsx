import { Component, Event, EventEmitter, Host, Prop, State, Watch, h } from '@stencil/core';

import { SparqlBinding, sparqlJson } from '../../lib/sparqlJson';
import {
  BASE_URI_GND,
  FORMAT_OUTPUT_GND,
  SIZE_GND,
  TYPE_GROUP_GND,
  TYPE_PERSON_GND,
  TYPE_PLACE_GND,
  QR_SPARQL_WIKIDATA,
  ENDPOINT_SPARQL_WIKIDATA,
  TITLE_GND,
  TITLE_WIKIDATA,
  TYPE_PERSON_WIKIDATA,
  TYPE_GROUP_WIKIDATA,
  TYPE_PLACE_WIKIDATA,
  TITLE_IDREF,
  BASE_URI_IDREF,
  SIZE_IDREF,
  FORMAT_OUTPUT_IDREF,
  TYPE_PERSON_IDREF,
  TYPE_PLACE_IDREF,
  TYPE_GROUP_IDREF,
  TYPE_ALL_IDREF,
  URL_IDREF,
  TITLE_GEOVISTORY,
  ENDPOINT_SPARQL_GEOVISTORY,
  QR_SPARQL_GEOVISTORY,
  TYPE_PERSON_GEOVISTORY,
  TYPE_PLACE_GEOVISTORY,
  TYPE_GROUP_GEOVISTORY,
} from './lib/const';

interface WikidataBindings {
  item: SparqlBinding;
  num: SparqlBinding;
  name: SparqlBinding;
}

interface GeovistoryBindings {
  item: SparqlBinding;
  name: SparqlBinding;
  classUri: SparqlBinding;
}

interface ItemBinding {
  uri: string;
  label: string;
}

export interface ItemSelectedEvent {
  /* The current total number of items being paged */
  uri: string;
}

@Component({
  tag: 'geov-authority-lookup-explorer',
  styleUrl: 'geov-authority-lookup-explorer.css',
  shadow: true,
})
export class GeovAuthorityLookupExplorer {
  @Prop() api!: string;
  apiAllowedValues: string[] = ['gnd', 'wikidata', 'idref', 'geovistory'];
  @Watch('api')
  validateApiValue(newValue: string, oldValue: string) {
    if (!this.apiAllowedValues.includes(newValue)) {
      console.error('Invalid value for prop "api". It must be one of the allowed values.');
      this.api = oldValue;
    }
  }

  @Prop() keywords: string;
  @Watch('keywords')
  keywordsHandler(newValue: string) {
    this.keywords = newValue;
    this.executeAllQueries();
  }

  @Prop() type: string;
  @Watch('type')
  typeHandler(newValue: string) {
    this.type = newValue;
    this.executeAllQueries();
  }

  @Prop() nbOccurencesMax = 5;

  @Prop() displaySelectBtn = true;

  @Prop() displayOpenBtn = true;

  @Prop() displayCopyBtn = false;

  @State() uriData: ItemBinding[];

  @State() title: string;

  @State() popoverElement: HTMLIonPopoverElement;

  @State() isPopoverOpen = false;

  @State() popoverItem: ItemBinding;

  @State() isLoadingData = false;

  async getDataGND() {
    this.title = TITLE_GND;
    this.uriData = [];
    if (this.keywords.trim() != '') {
      let queryApiGnd = BASE_URI_GND + this.keywords + SIZE_GND + this.nbOccurencesMax + FORMAT_OUTPUT_GND;
      if (this.type !== null && this.type === 'Person') {
        queryApiGnd = queryApiGnd + TYPE_PERSON_GND;
      }
      if (this.type !== null && this.type === 'Place') {
        queryApiGnd = queryApiGnd + TYPE_PLACE_GND;
      }
      if (this.type !== null && this.type === 'Group') {
        queryApiGnd = queryApiGnd + TYPE_GROUP_GND;
      }
      const response = await fetch(queryApiGnd);
      const data = await response.json();
      this.uriData = data.map((obj: any) => ({ uri: obj.id, label: obj.label }));
    }
  }

  async getDataWikiData() {
    this.title = TITLE_WIKIDATA;
    this.uriData = [];
    if (this.keywords.trim() != '') {
      let qrWD = QR_SPARQL_WIKIDATA(this.keywords, '', this.nbOccurencesMax);
      if (this.type !== null && this.type === 'Person') {
        qrWD = QR_SPARQL_WIKIDATA(this.keywords, TYPE_PERSON_WIKIDATA, this.nbOccurencesMax);
      }
      if (this.type !== null && this.type === 'Place') {
        qrWD = QR_SPARQL_WIKIDATA(this.keywords, TYPE_PLACE_WIKIDATA, this.nbOccurencesMax);
      }
      if (this.type !== null && this.type === 'Group') {
        qrWD = QR_SPARQL_WIKIDATA(this.keywords, TYPE_GROUP_WIKIDATA, this.nbOccurencesMax);
      }

      const data = await sparqlJson<WikidataBindings>(ENDPOINT_SPARQL_WIKIDATA, qrWD);
      this.uriData = data?.results?.bindings.map((obj: any) => ({ uri: obj.item.value, label: obj.name.value }));
    }
  }

  async getDataIdRef() {
    this.title = TITLE_IDREF;
    this.uriData = [];
    if (this.keywords.trim() != '') {
      const kw = this.keywords.trim().split(' ').join(' AND ');

      let queryApiIdRef = BASE_URI_IDREF + TYPE_ALL_IDREF + '(' + kw + ')' + SIZE_IDREF + this.nbOccurencesMax + FORMAT_OUTPUT_IDREF;
      if (this.type !== null && this.type === 'Person') {
        queryApiIdRef = BASE_URI_IDREF + TYPE_PERSON_IDREF + '(' + kw + ')' + SIZE_IDREF + this.nbOccurencesMax + FORMAT_OUTPUT_IDREF;
      }
      if (this.type !== null && this.type === 'Place') {
        queryApiIdRef = BASE_URI_IDREF + TYPE_PLACE_IDREF + '(' + kw + ')' + SIZE_IDREF + this.nbOccurencesMax + FORMAT_OUTPUT_IDREF;
      }
      if (this.type !== null && this.type === 'Group') {
        queryApiIdRef = BASE_URI_IDREF + TYPE_GROUP_IDREF + '(' + kw + ')' + SIZE_IDREF + this.nbOccurencesMax + FORMAT_OUTPUT_IDREF;
      }
      const response = await fetch(queryApiIdRef);
      const data = await response.json();
      this.uriData = data.response.docs?.map((obj: any) => ({ uri: URL_IDREF + obj.ppn_z, label: obj.affcourt_z }));
    }
  }

  async getGeovistoryData() {
    this.title = TITLE_GEOVISTORY;
    this.uriData = [];
    const kw = this.keywords
      .trim()
      .split(' ')
      .map(word => `*${word}*`)
      .join(' AND ');
    if (kw.trim() != '') {
      let qrGV = QR_SPARQL_GEOVISTORY(kw, '', this.nbOccurencesMax);
      if (this.type !== null && this.type === 'Person') {
        qrGV = QR_SPARQL_GEOVISTORY(kw, TYPE_PERSON_GEOVISTORY, this.nbOccurencesMax);
      }
      if (this.type !== null && this.type === 'Place') {
        qrGV = QR_SPARQL_GEOVISTORY(kw, TYPE_PLACE_GEOVISTORY, this.nbOccurencesMax);
      }
      if (this.type !== null && this.type === 'Group') {
        qrGV = QR_SPARQL_GEOVISTORY(kw, TYPE_GROUP_GEOVISTORY, this.nbOccurencesMax);
      }

      const data = await sparqlJson<GeovistoryBindings>(ENDPOINT_SPARQL_GEOVISTORY, qrGV);
      this.uriData = data.results?.bindings.map((obj: any) => ({ uri: obj.item.value, label: obj.name.value }));
    }
  }

  async executeAllQueries() {
    this.isLoadingData = true;

    if (this.api == 'gnd') {
      await this.getDataGND();
    }

    if (this.api == 'wikidata') {
      await this.getDataWikiData();
    }

    if (this.api == 'idref') {
      await this.getDataIdRef();
    }

    if (this.api == 'geovistory') {
      await this.getGeovistoryData();
    }

    this.isLoadingData = false;
  }

  handleClick(item: ItemBinding): void {
    this.isPopoverOpen = true;
    this.popoverItem = item;
  }
  handleDismiss(): void {
    this.isPopoverOpen = false;
  }

  /**
   * Event emitted when the select button has been clicked.
   * The event does not bubble up through the DOM.
   */
  @Event({ bubbles: false })
  selected: EventEmitter<ItemSelectedEvent>;

  handleSelected(item: ItemBinding) {
    this.selected.emit({
      uri: item.uri,
    });
  }

  handleCopy(item: ItemBinding) {
    navigator.clipboard.writeText(item.uri);
  }

  async componentDidLoad() {
    await this.executeAllQueries();
  }

  componentDidRender() {
    if (this.isPopoverOpen) {
      this.popoverElement.present();

      this.popoverElement.onDidDismiss().then(() => {
        this.isPopoverOpen = false;
      });
    }
  }

  render() {
    return (
      <Host>
        {this.isPopoverOpen && (
          <ion-popover ref={el => (this.popoverElement = el)}>
            {this.displaySelectBtn && (
              <ion-button expand="block" onClick={() => this.handleSelected(this.popoverItem)}>
                Select
              </ion-button>
            )}
            {this.displayOpenBtn && (
              <ion-button expand="block" href={this.popoverItem.uri} fill="outline" target="_blank">
                Open
                <ion-icon name="open-outline" slot="end"></ion-icon>
              </ion-button>
            )}
            {this.displayCopyBtn && (
              <ion-button expand="block" fill="clear" onClick={() => this.handleCopy(this.popoverItem)}>
                Copy
                <ion-icon name="copy-outline" slot="end"></ion-icon>
              </ion-button>
            )}
            <ion-button expand="block" fill="clear" onClick={() => this.handleDismiss()}>
              <ion-icon name="close-circle-outline"></ion-icon>
            </ion-button>
          </ion-popover>
        )}
        <ion-card>
          <ion-card-header>
            <ion-card-subtitle>{this.title}</ion-card-subtitle>
          </ion-card-header>
          <ion-card-content>
            {this.isLoadingData && (
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <ion-spinner></ion-spinner>
              </div>
            )}
            {!this.isLoadingData && (
              <ion-list lines="full">
                {this.uriData && this.uriData.length === 0 && <ion-item lines="none">Nothing found</ion-item>}
                {this.uriData &&
                  this.uriData.map((item, index) => (
                    <ion-item lines={index === this.uriData.length - 1 ? 'none' : 'full'}>
                      <ion-grid class="containerResponsive">
                        <ion-row>
                          <ion-col class="colContent">
                            <ion-label>
                              <h2>{item.label}</h2>
                              <p>{item.uri}</p>
                            </ion-label>
                          </ion-col>
                          <ion-col class="colButtons">
                            {this.displayCopyBtn && (
                              <ion-button fill="clear" onClick={() => this.handleCopy(item)}>
                                Copy
                                <ion-icon name="copy-outline" slot="end"></ion-icon>
                              </ion-button>
                            )}
                            {this.displayOpenBtn && (
                              <ion-button fill="clear" href={item.uri} target="_blank">
                                Open
                                <ion-icon name="open-outline" slot="end"></ion-icon>
                              </ion-button>
                            )}
                            {this.displaySelectBtn && <ion-button onClick={() => this.handleSelected(item)}>Select</ion-button>}
                          </ion-col>
                          <ion-col class="colMenu">
                            <ion-button onClick={() => this.handleClick(item)}>
                              <ion-icon name="menu-outline"></ion-icon>
                            </ion-button>
                          </ion-col>
                        </ion-row>
                      </ion-grid>
                    </ion-item>
                  ))}
              </ion-list>
            )}
          </ion-card-content>
        </ion-card>
        <slot></slot>
      </Host>
    );
  }
}

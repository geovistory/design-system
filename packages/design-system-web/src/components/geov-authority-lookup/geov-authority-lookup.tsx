import { Component, Host, Prop, State, h } from '@stencil/core';
//import { popoverController } from '@ionic/core';

@Component({
  tag: 'geov-authority-lookup',
  styleUrl: 'geov-authority-lookup.css',
  shadow: true,
})
export class GeovAuthorityLookup {
  @Prop() apis: string[] = ['gnd', 'idref', 'wikidata'];

  @Prop() types: string[] = ['All', 'Person', 'Place', 'Group'];

  @Prop() nbOccurencesMax = 5;

  @Prop() displaySelectBtn = true;

  @Prop() displayOpenBtn = true;

  @Prop() displayCopyBtn = false;

  @Prop() nbColMax = 3;

  @State() keywords = '';

  @State() type = '';

  @State() classForceCol = '';

  componentWillLoad() {
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
              {this.apis &&
                this.apis.map(item => (
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
                ))}
            </ion-row>
          </ion-grid>
        </div>
        <slot></slot>
      </Host>
    );
  }
}

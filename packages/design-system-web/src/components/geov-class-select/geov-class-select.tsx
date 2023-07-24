import { Component, Event, EventEmitter, h, Host, Prop, State } from '@stencil/core';

export interface GeovClassSelectItem {
  classUri: string;
  classLabel: string;
  instanceCount: number;
}

export interface ClassSelectEvent {
  selectedClassUris: string[];
}
/**
 * This component is a multi-select UI for classes (with label, uri and count).
 */
@Component({
  tag: 'geov-class-select',
  styleUrl: 'geov-class-select.css',
  shadow: false,
})
export class GeovClassSelect {
  /**
   * If true, the classes are checked on init, else none is checked on init
   */
  @Prop() checkedOnInit = true;

  @Prop({ mutable: true }) items?: GeovClassSelectItem[];
  @Prop() loading?: boolean;

  @State() showAll = false;

  @Event() selectionChanged: EventEmitter<ClassSelectEvent>;

  selection: { [key: string]: boolean } = {};

  // the max length of the list list when this.showAll = false
  maxLength = 6;

  // if true, click on toggle all will check all and vice versa
  @State() allToggler: boolean;

  constructor() {
    this.allToggler = !this.checkedOnInit;
  }

  /**
   * Called once just after the component is fully loaded and the first render() occurs.
   */
  componentDidLoad() {
    this.emitSelection();
  }
  onItemChange(uri: string, selected: boolean) {
    const changed = this.selection[uri] !== selected;
    this.selection[uri] = selected;
    if (changed) this.emitSelection();
  }
  emitSelection() {
    const selectedClassUris = Object.keys(this.selection).filter(k => this.selection[k] === true);
    this.selectionChanged.emit({ selectedClassUris });
  }
  isChecked(uri: string) {
    if (this.selection[uri] !== undefined) return this.selection[uri];
    this.selection[uri] = this.checkedOnInit;
    return this.selection[uri];
  }
  toggleAll() {
    this.items?.forEach(i => {
      this.selection[i.classUri] = this.allToggler;
    });
    this.allToggler = !this.allToggler;
    this.emitSelection();
  }
  render() {
    return (
      <Host>
        <ion-list lines="full">
          <ion-list-header>
            <ion-label>Classes ({this.items?.length ?? 0})</ion-label>
            {/* {this.allToggler ? <ion-button onClick={_ => this.toggleAll()}>Select all</ion-button> : <ion-button onClick={_ => this.toggleAll()}>Deselect all</ion-button>} */}
            {this.items?.length > this.maxLength &&
              (this.showAll === false ? (
                <ion-button onClick={() => (this.showAll = true)}>Show all</ion-button>
              ) : (
                <ion-button onClick={() => (this.showAll = false)}>Show less</ion-button>
              ))}
          </ion-list-header>
          <ion-item>
            <ion-note>All Classes</ion-note>
            <ion-checkbox slot="end" checked={!this.allToggler} onIonChange={_ => this.toggleAll()}></ion-checkbox>
          </ion-item>
          {this.items?.map((item, index) => (
            <ion-item class={!this.showAll && index >= this.maxLength ? 'hide' : ''}>
              <ion-label>{item.classLabel}</ion-label>
              <ion-badge slot="end">{item.instanceCount}</ion-badge>
              <ion-checkbox slot="end" checked={this.isChecked(item.classUri)} onIonChange={event => this.onItemChange(item.classUri, event.detail.checked)}></ion-checkbox>
            </ion-item>
          ))}
          {!this.items?.length && !this.loading && (
            <ion-item>
              <ion-label>No class found</ion-label>
            </ion-item>
          )}
          {this.loading &&
            ['', '', '', '', ''].map(_ => (
              <ion-item>
                <ion-label>
                  <ion-skeleton-text animated={true}></ion-skeleton-text>
                </ion-label>
              </ion-item>
            ))}
        </ion-list>
      </Host>
    );
  }
}

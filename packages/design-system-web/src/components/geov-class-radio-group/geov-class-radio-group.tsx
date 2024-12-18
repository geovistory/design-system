import { Component, Host, h, Prop, State, Event, EventEmitter, Watch } from '@stencil/core';
import { GeovClassSelectItem } from '../geov-class-select/geov-class-select';
export interface GeovClassRadioGroupEvent {
  value?: GeovClassSelectItem;
}
/**
 * This component is a single-select UI for classes (with label, uri and count).
 */
@Component({
  tag: 'geov-class-radio-group',
  styleUrl: 'geov-class-radio-group.css',
  shadow: true,
})
export class GeovClassRadioGroup {
  @Prop({ mutable: true }) items?: GeovClassSelectItem[];
  @State() preferredItemsList?: GeovClassSelectItem[];
  @State() restItemsList?: GeovClassSelectItem[];
  @Prop() loading?: boolean;
  @Prop() initValue?: GeovClassSelectItem;
  @Prop() uriPrefix = 'https://ontome.net/ontology/';
  @Prop() preferredItems?: string[];

  @State() showAll = false;
  @Event() selectionChanged: EventEmitter<GeovClassRadioGroupEvent>;
  maxLength = 6;

  @Watch('items')
  onItemsChange() {
    // divide items into preferred and rest
    this.preferredItemsList = [];
    this.restItemsList = [];
    this.items.forEach(item => {
      if (this.preferredItems?.includes(item.classUri.substring(this.uriPrefix.length)) && !this.preferredItemsList?.map(it => it.classUri).includes(item.classUri)) {
        this.preferredItemsList?.push(item);
      } else {
        this.restItemsList?.push(item);
      }
    });
  }

  componentWillLoad() {
    this.onItemsChange();
  }

  emit(classUri: string | null) {
    if (!classUri) this.selectionChanged.emit({});
    const toEmit = this.items.find(item => item.classUri === classUri);
    if (toEmit) this.selectionChanged.emit({ value: toEmit });
  }

  render() {
    return (
      <Host>
        <ion-list>
          <ion-radio-group onIonChange={e => this.emit(e.detail.value)} value={this.initValue?.classUri ?? null}>
            <ion-item-divider>
              <ion-label>Class Filter</ion-label>
            </ion-item-divider>
            <ion-item>
              <ion-note>All classes ({this.items?.length ?? 0})</ion-note>
              <ion-radio slot="end" value={null}></ion-radio>
            </ion-item>
            {this.preferredItemsList?.map(item => (
              <ion-item>
                <ion-label>{item.classLabel}</ion-label>
                <ion-note slot="end">{item.instanceCount}</ion-note>
                <ion-radio slot="end" value={item.classUri}></ion-radio>
              </ion-item>
            ))}
          </ion-radio-group>
        </ion-list>
        <ion-button fill="clear" onClick={() => (this.showAll = !this.showAll)}>
          {this.showAll ? 'Show less' : 'Show all classes'}
        </ion-button>
        {this.showAll && (
          <ion-list>
            <ion-radio-group onIonChange={e => this.emit(e.detail.value)} value={this.initValue?.classUri ?? null}>
              {this.restItemsList?.map((item, index) => (
                <ion-item class={!this.showAll && index >= this.maxLength ? 'hide' : ''}>
                  <ion-label>{item.classLabel}</ion-label>
                  <ion-note slot="end">{item.instanceCount}</ion-note>
                  <ion-radio slot="end" value={item.classUri}></ion-radio>
                </ion-item>
              ))}
              {!this.restItemsList?.length && !this.loading && (
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
            </ion-radio-group>
          </ion-list>
        )}
      </Host>
    );
  }
}

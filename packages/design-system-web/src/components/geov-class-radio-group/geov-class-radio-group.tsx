import { Component, Host, h, Prop, State, Event, EventEmitter } from '@stencil/core';
import { GeovClassSelectItem } from '../geov-class-select/geov-class-select';
export interface GeovClassRadioGroupEvent {
  value: GeovClassSelectItem;
}
@Component({
  tag: 'geov-class-radio-group',
  styleUrl: 'geov-class-radio-group.css',
  shadow: true,
})
export class GeovClassRadioGroup {
  @Prop({ mutable: true }) items?: GeovClassSelectItem[];
  @Prop() loading?: boolean;
  @Prop() initValue?: GeovClassSelectItem;

  @State() showAll = false;
  @Event() selectionChanged: EventEmitter<GeovClassRadioGroupEvent>;
  maxLength = 6;

  emit(classUri: string) {
    const toEmit = this.items.find(item => item.classUri === classUri);
    if (toEmit) this.selectionChanged.emit({ value: toEmit });
  }

  render() {
    console.log(this.initValue);
    return (
      <Host>
        <ion-list>
          <ion-radio-group onIonChange={e => this.emit(e.detail.value)} value={this.initValue?.classUri}>
            <ion-item-divider>
              <ion-label>Class ({this.items?.length ?? 0})</ion-label>
            </ion-item-divider>
            {/* <ion-item>
              <ion-note>All Classes</ion-note>
              <ion-radio slot="end" value={null}></ion-radio>
            </ion-item> */}
            {this.items?.map((item, index) => (
              <ion-item class={!this.showAll && index >= this.maxLength ? 'hide' : ''}>
                <ion-label>{item.classLabel}</ion-label>
                <ion-note slot="end">{item.instanceCount}</ion-note>
                <ion-radio slot="end" value={item.classUri}></ion-radio>
              </ion-item>
            ))}
            {!this.items?.length && !this.loading && (
              <ion-item>
                <ion-label>No class found</ion-label>
              </ion-item>
            )}
            {this.items?.length > this.maxLength && (
              <span>
                {this.showAll === false ? (
                  <ion-button fill="clear" onClick={() => (this.showAll = true)}>
                    Show all
                  </ion-button>
                ) : (
                  <ion-button fill="clear" onClick={() => (this.showAll = false)}>
                    Show less
                  </ion-button>
                )}
              </span>
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
      </Host>
    );
  }
}

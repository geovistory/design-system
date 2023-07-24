import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core';
import { GeovClassSelectItem } from '../geov-class-select/geov-class-select';
export interface GeovClassSelectPopupEvent {
  value?: GeovClassSelectItem;
}
/**
 * This component opens a popup with is a single-select UI for classes (with label, uri and count).
 */
@Component({
  tag: 'geov-class-select-popup',
  styleUrl: 'geov-class-select-popup.css',
  // shadow: true,
})
export class GeovClassSelectPopup {
  @Prop({ mutable: true }) items?: GeovClassSelectItem[];
  @Prop() initValue?: GeovClassSelectItem;

  @Event() selectionChanged: EventEmitter<GeovClassSelectPopupEvent>;

  emit(classUri: string | null) {
    if (!classUri) this.selectionChanged.emit({});
    const toEmit = this.items.find(item => item.classUri === classUri);
    if (toEmit) this.selectionChanged.emit({ value: toEmit });
  }

  render() {
    return (
      <Host>
        <ion-list>
          <ion-item>
            <ion-note>Class Filter:</ion-note>
            <ion-select
              placeholder="Select class"
              onIonChange={e => this.emit(e.detail.value)}
              value={this.initValue?.classUri ?? null}
              ref={e =>
                (e.interfaceOptions = {
                  header: 'Class Filter',
                })
              }
            >
              <ion-select-option value={null}>
                <ion-label slot="start">All classes ({this.items?.length ?? 0})</ion-label>
              </ion-select-option>
              {this.items?.map(item => (
                <ion-select-option value={item.classUri}>
                  <ion-label slot="start">{item.classLabel}</ion-label>{' '}
                </ion-select-option>
              ))}
            </ion-select>
          </ion-item>
        </ion-list>
      </Host>
    );
  }
}

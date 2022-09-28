import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core';
import { GeovClassSelectItem } from '../geov-class-select/geov-class-select';
interface GeovClassSelectPopupEvent {
  value: GeovClassSelectItem;
}
@Component({
  tag: 'geov-class-select-popup',
  styleUrl: 'geov-class-select-popup.css',
  // shadow: true,
})
export class GeovClassSelectPopup {
  @Prop({ mutable: true }) items?: GeovClassSelectItem[];
  @Prop() initValue?: GeovClassSelectItem;

  @Event() selectionChanged: EventEmitter<GeovClassSelectPopupEvent>;

  emit(classUri: string) {
    const toEmit = this.items.find(item => item.classUri === classUri);
    if (toEmit) this.selectionChanged.emit({ value: toEmit });
  }

  render() {
    return (
      <Host>
        <ion-list>
          <ion-item>
            <ion-note>Class:</ion-note>
            <ion-select placeholder="Select class" onIonChange={e => this.emit(e.detail.value)} value={this.initValue?.classUri}>
              {this.items?.map(item => (
                <ion-select-option value={item.classUri}>
                  <ion-label slot="start">{item.classLabel}</ion-label> {' '}
                </ion-select-option>
              ))}
            </ion-select>
          </ion-item>
        </ion-list>
      </Host>
    );
  }
}

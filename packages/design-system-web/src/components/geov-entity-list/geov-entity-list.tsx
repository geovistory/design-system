import { Component, Host, h, Prop } from '@stencil/core';
export interface GeovEntityListItem {
  entityUri: string;
  entityLabel: string;
  classUri: string;
  classLabel: string;
}
@Component({
  tag: 'geov-entity-list',
  styleUrl: 'geov-entity-list.css',
  shadow: true,
})
export class GeovEntityList {
  @Prop() items?: GeovEntityListItem[];
  @Prop() loading?: boolean;
  @Prop() defaultPageSize = 5;
  /**
   * urlAppend will be appended to the URIs used as links to the geovistory entity pages.
   * Example: '?p=84760' will be redirected to the entity page of project 84760
   */
  @Prop() urlAppend = '';

  render() {
    const iterator = [];
    for (let i = 0; i < this.defaultPageSize; i++) {
      iterator.push('');
    }

    return (
      <Host>
        <ion-list lines="full">
          {this.items?.map(item => (
            <ion-item href={item.entityUri+this.urlAppend} target="_blank" rel="noreferrer">
              <ion-label>
                <h2>{item.entityLabel}</h2>
                <p>{item.classLabel}</p>
              </ion-label>
            </ion-item>
          ))}

          {this.loading &&
            iterator.map(_ => (
              <ion-item>
                <ion-label>
                  <h2>
                    <ion-skeleton-text animated={true} style={{ width: '80%' }}></ion-skeleton-text>
                  </h2>
                  <p>
                    <ion-skeleton-text animated={true} style={{ width: '80%' }}></ion-skeleton-text>
                  </p>
                </ion-label>
              </ion-item>
            ))}
        </ion-list>
      </Host>
    );
  }
}

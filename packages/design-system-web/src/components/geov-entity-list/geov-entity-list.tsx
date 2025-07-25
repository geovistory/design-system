import { Component, Host, h, Prop } from '@stencil/core';
import { regexReplace } from '../../lib/regexReplace';
export interface GeovEntityListItem {
  entityUri: string;
  entityLabel: string;
  classUri: string;
  classLabel: string;
}
/**
 * This component is a UI to display entities in a list.
 * Each item displays the entity label (first line) and class label (second line)
 * On click on an item, the passed in URI is opened in a new browser tab.
 * The components supports
 * - pagination
 * - loading state
 * - drop-in regex to modify the uri (useful for staging environments).
 */
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
   * sparqlEndpoint
   * URL of the sparql endpoint to query
   */
  @Prop() sparqlEndpoint = '';

  /**
   * uriRegex
   * Optional regex with capturing groups to transform
   * the uri into the desired url. To use together
   * with uriReplace.
   */
  @Prop() uriRegex?: string;
  /**
   * uriReplace
   * String used to replace the uriRegex.
   *
   * Example (pseudo code):
   * const uriRegex = (http:\/\/geovistory.org\/)(.*)
   * const uriReplace = "http://dev.geovistory.org/resource/$2?p=123"
   * http://geovistory.org/resource/i54321 => http://dev.geovistory.org/resource/54321?p=123
   */
  @Prop() uriReplace?: string;

  render() {
    const iterator = [];
    for (let i = 0; i < this.defaultPageSize; i++) {
      iterator.push('');
    }

    return (
      <Host>
        <ion-list lines="full">
          {this.items?.map(item => (
            <ion-item href={regexReplace(item.entityUri, this.uriRegex, this.uriReplace, this.sparqlEndpoint)} target="_blank" rel="noreferrer">
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

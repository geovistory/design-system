import { Component, h, Host, Prop } from '@stencil/core';
import { GeovEntityPropertiesCustomEvent } from '../../components';
import { GeovEntityPropertiesData } from '../geov-entity-properties/geov-entity-properties';

@Component({
  tag: 'geov-entity',
  styleUrl: 'geov-entity.css',
  shadow: false,
})
export class GeovEntity {
  /**
   * sparqlEndpoint
   * URL of the sparql endpoint
   */
  @Prop() sparqlEndpoint: string;
  /**
   * entityId
   * ID number of entity, e.g. 'i315800'
   */
  @Prop() entityId: string;
  /**
   * language
   * prints the label with the language or english, if not found, e.g. 'en'
   */
  @Prop() language = 'en';
  /*
   * fetchBeforRender
   * if true, componentWillLoad() returns a promise for the loading of all data [default: true]
   */
  @Prop() fetchBeforeRender = true;
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
  /*
   * ssrIdPrefix
   * this component fetches class-label, entity-label and definition of the entity
   * with a predicable ssrId. If you use multiple instances of this component
   * on the same page, please set individual ssrIdPrefixes.
   */
  @Prop() ssrIdPrefix = '';

  predicatesBasic = ['http://www.w3.org/2000/01/rdf-schema#label', 'http://www.w3.org/1999/02/22-rdf-syntax-ns#type'];
  predicatesTime = ['https://ontome.net/ontology/p4'];
  excluded = ['https://ontome.net/ontology/p1943'];
  render() {
    return (
      <Host>
        <div class="container">
          <div class="header">
            <ion-grid fixed={true} class="ion-padding">
              <h5>
                <geov-entity-class-label entityId={this.entityId} sparqlEndpoint={this.sparqlEndpoint} _ssrId={`${this.ssrIdPrefix}class-label`}></geov-entity-class-label>
              </h5>
              <h1>
                <geov-entity-label entityId={this.entityId} sparqlEndpoint={this.sparqlEndpoint} _ssrId={`${this.ssrIdPrefix}entity-label`}></geov-entity-label>
              </h1>
              <p>
                <geov-entity-definition entityId={this.entityId} sparqlEndpoint={this.sparqlEndpoint} _ssrId={`${this.ssrIdPrefix}definition`}></geov-entity-definition>
              </p>
            </ion-grid>
          </div>

          <slot name="body-start"></slot>

          {/* <div class="ion-padding">
              <ion-segment value="default">
                <ion-segment-button value="default">
                  <ion-icon icon={listCircleOutline}></ion-icon>
                </ion-segment-button>
                <ion-segment-button value="graph">
                  <ion-icon icon={gitNetworkOutline}></ion-icon>
                </ion-segment-button>
              </ion-segment>
            </div> */}

          {/* Basics */}
          <geov-entity-properties
            onDataFetched={this.removeIfEmpty()}
            predicateInclude={this.predicatesBasic.join(',')}
            fixedGrid={true}
            class="section columns-2"
            sparqlEndpoint={this.sparqlEndpoint}
            entityId={this.entityId}
            language={'en'}
            fetchBeforeRender={this.fetchBeforeRender}
            uriRegex={this.uriRegex}
            uriReplace={this.uriReplace}
          ></geov-entity-properties>

          {/* Rest */}
          <geov-entity-properties
            onDataFetched={this.removeIfEmpty()}
            predicateExclude={[...this.predicatesBasic, ...this.predicatesTime, ...this.excluded].join(',')}
            fixedGrid={true}
            class="section columns-3"
            sparqlEndpoint={this.sparqlEndpoint}
            entityId={this.entityId}
            language={'en'}
            fetchBeforeRender={this.fetchBeforeRender}
            uriRegex={this.uriRegex}
            uriReplace={this.uriReplace}
          ></geov-entity-properties>

          {/* Time */}
          <geov-entity-properties
            onDataFetched={this.removeIfEmpty()}
            predicateInclude={this.predicatesTime.join(',')}
            fixedGrid={true}
            class="section columns-1"
            sparqlEndpoint={this.sparqlEndpoint}
            entityId={this.entityId}
            language={'en'}
            fetchBeforeRender={this.fetchBeforeRender}
            uriRegex={this.uriRegex}
            uriReplace={this.uriReplace}
          ></geov-entity-properties>

          <slot name="body-end"></slot>
        </div>
      </Host>
    );
  }

  /**
   * removes the element from dom, if the fetched data is empty
   * @returns
   */
  private removeIfEmpty(): (event: GeovEntityPropertiesCustomEvent<GeovEntityPropertiesData>) => void {
    return event => {
      if (event.detail.propsWithCount.length === 0) {
        event.target.remove();
      }
    };
  }
}

import { Component, h, Host, Prop } from '@stencil/core';
import { GeovEntityPropertiesCustomEvent } from '../../components';
import { getTimeSpanUri } from '../../lib/getTimeSpanUri';
import { regexReplace } from '../../lib/regexReplace';
import { GeovEntityPropertiesData } from '../geov-entity-properties/geov-entity-properties';

/**
 * This component displays the data of a geovistory entity.
 * It is used to generate entity pages on geovistory.org.
 */
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
   * projectId
   * ID number of project, e.g. '123123'
   */
  @Prop() projectId: number | undefined;
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
  excluded = ['https://ontome.net/ontology/p1943', 'https://ontome.net/ontology/p1762'];
  render() {
    const pageLink = this.getPageLink();
    const uri = this.getURI();
    return (
      <Host>
        <div class="container">
          <div class="header">
            <ion-grid fixed={true}>
              <div class="supertitle">
                <geov-entity-class-label
                  entityId={this.entityId}
                  sparqlEndpoint={this.sparqlEndpoint}
                  _ssrId={`${this.ssrIdPrefix}class-label`}
                  withIcon={true}
                ></geov-entity-class-label>
                <geov-time-span entityUri={getTimeSpanUri('http://geovistory.org/resource/' + this.entityId)} sparqlEndpoint={this.sparqlEndpoint}></geov-time-span>
              </div>
              <h1 class="unrestricted-width">
                <geov-entity-label entityId={this.entityId} sparqlEndpoint={this.sparqlEndpoint} _ssrId={`${this.ssrIdPrefix}entity-label`}></geov-entity-label>
              </h1>
              <div>
                <geov-entity-definition entityId={this.entityId} sparqlEndpoint={this.sparqlEndpoint} _ssrId={`${this.ssrIdPrefix}definition`}></geov-entity-definition>
              </div>
              <div class="metadata">
                <div>
                  URI:{' '}
                  <a href={uri} target="_blank">
                    {uri}
                  </a>
                </div>
                {this.projectId && (
                  <div>
                    Link:{' '}
                    <a href={pageLink} target="_blank">
                      {pageLink}
                    </a>
                  </div>
                )}
              </div>
            </ion-grid>
          </div>
          <slot name="body-start"></slot>
          {/* Rest */}
          <geov-entity-properties
            onDataFetched={this.removeIfEmpty()}
            predicateExclude={[...this.predicatesBasic, ...this.excluded].join(',')}
            fixedGrid={false}
            class="columns-1"
            sparqlEndpoint={this.sparqlEndpoint}
            entityId={this.entityId}
            language={'en'}
            fetchBeforeRender={this.fetchBeforeRender}
            uriRegex={this.uriRegex}
            uriReplace={this.uriReplace}
          ></geov-entity-properties>

          {/* Download RDF button */}
          <div class="section columns-1 ion-text-center">
            <geov-entity-download-rdf entityId={this.entityId} projectId={this.projectId} color="primary" fill="outline" buttonLabel="Download RDF" />
          </div>

          <slot name="body-end"></slot>
        </div>
      </Host>
    );
  }

  /**
   * Generates the URL of this page by applying the given regex.
   *
   * @returns the url to this page
   */
  private getPageLink() {
    return regexReplace('http://geovistory.org/resource/' + this.entityId, this.uriRegex, this.uriReplace);
  }

  /**
   * Generates the URI of this resource. This depends on the regex, which allows to override
   * the real uri to make working links in local, dev or staging environments.
   * In contrast to getURL it omits the 'p' query parameter.
   *
   * @returns the url to this page
   */
  private getURI() {
    return this.getPageLink().replace('?p=' + this.projectId, '');
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

import { Component, h, Host, Prop } from '@stencil/core';

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

  predicatesBasic = ['http://www.w3.org/2000/01/rdf-schema#label', 'http://www.w3.org/1999/02/22-rdf-syntax-ns#type'];
  predicatesTime = ['https://ontome.net/ontology/p4'];
  render() {
    return (
      <Host>
        <div class="jumbo">
          <h2>
            <geov-entity-class-label entityId={this.entityId} sparqlEndpoint={this.sparqlEndpoint}></geov-entity-class-label>
          </h2>
          <h1>
            <geov-entity-label entityId={this.entityId} sparqlEndpoint={this.sparqlEndpoint}></geov-entity-label>
          </h1>
          <p>
            <geov-entity-definition entityId={this.entityId} sparqlEndpoint={this.sparqlEndpoint}></geov-entity-definition>
          </p>
        </div>
        <ion-grid fixed={true}>
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
            predicateInclude={this.predicatesBasic.join(',')}
            class="columns-2"
            color="primary"
            sparqlEndpoint={this.sparqlEndpoint}
            entityId={this.entityId}
            language={'en'}
            fetchBeforeRender={this.fetchBeforeRender}
          ></geov-entity-properties>

          {/* Rest */}
          <geov-entity-properties
            predicateExclude={[...this.predicatesBasic, ...this.predicatesTime].join(',')}
            class="columns-3"
            color="tertiary"
            sparqlEndpoint={this.sparqlEndpoint}
            entityId={this.entityId}
            language={'en'}
            fetchBeforeRender={this.fetchBeforeRender}
          ></geov-entity-properties>

          {/* Time */}
          <geov-entity-properties
            predicateInclude={this.predicatesTime.join(',')}
            class="columns-1"
            color="secondary"
            sparqlEndpoint={this.sparqlEndpoint}
            entityId={this.entityId}
            language={'en'}
            fetchBeforeRender={this.fetchBeforeRender}
          ></geov-entity-properties>

          <ion-card color="secondary">
            <ion-card-header>
              <ion-card-subtitle>Metadata</ion-card-subtitle>
            </ion-card-header>

            <ion-card-content>
              URI: <a href={`http://geovistory.org/resource/${this.entityId}`}>{`http://geovistory.org/resource/${this.entityId}`}</a>
            </ion-card-content>
          </ion-card>
        </ion-grid>
        <slot></slot>
      </Host>
    );
  }
}

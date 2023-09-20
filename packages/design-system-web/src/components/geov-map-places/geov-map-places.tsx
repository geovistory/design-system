import { Component, h, Host, Prop, State, Element } from '@stencil/core';
import { isNode } from '../../lib/isNode';
import { importMapLibre } from '../../lib/importMapLibre';
import { SparqlBinding, sparqlJson } from '../../lib/sparqlJson';

type SparqlResponse = {
  classnames: SparqlBinding;
  classcounts: SparqlBinding;
};

/**
 * This component fetches the frequency of each class (object of `rdfs:type` or `a`)
 * exsisting on the given sparql endpoint.
 *
 * The result is displayed as a pie-chart.
 */
@Component({
  tag: 'geov-map-places',
  styleUrl: 'geov-map-places.css',
  shadow: false,
})
export class GeovMapPlaces {
  @Element() el: HTMLElement;
  /**
   * sparqlEndpoint
   * URL of the sparql endpoint
   */
  @Prop() sparqlEndpoint: string;

  /**
   * Maximum of Objects fetched (LIMIT)
   */
  @Prop() limit: number = 1000;

  /**
   * The center of the map
   */
  @Prop() center: [number, number];

  /**
   * The initial zoomlevel of the map
   */
  @Prop() zoom: number = 5;

  /**
   * The results are restricted to the visible part of the map
   */
  @Prop() queryBoundingBox: boolean = false;

  @State() loading: boolean;

  async componentDidLoad() {
    // If we are in a browser
    if (!isNode()) {
      this.loading = true;
      // Load MapLibre script
      const MapLibre = await importMapLibre();
      console.log(MapLibre);

      const qrPlaces = `
        PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
        PREFIX ontome: <https://ontome.net/ontology/>

        SELECT ?subject ?geoPlaceLabel ?long ?lat
            WHERE {?subject ^ontome:p147 ?presence.
            ?subject rdfs:label    ?geoPlaceLabel.
            ?presence ontome:p148 ?place.
          bind(replace(str(?place), '<http://www.opengis.net/def/crs/EPSG/0/4326>', "", "i") as ?rep)
          bind( replace( str(?rep), "^[^0-9\.-]*([-]?[0-9\.]+) .*$", "$1" ) as ?long )
          bind( replace( str(?rep), "^.* ([-]?[0-9\.]+)[^0-9\.]*$", "$1" ) as ?lat )
        } LIMIT ${this.limit}
      `;

      // Send the request to the provided sparql endpoint
      sparqlJson<SparqlResponse>(this.sparqlEndpoint, qrPlaces).then(res => {
        // Parse the response
        const response = res?.results?.bindings;
        console.log(response);

        this.loading = false;
      });
    }
  }

  render() {
    return (
      <Host>
        {this.loading && (
          <div style={{ width: 100 + 'px', height: 100 + 'px' }} class="loading">
            <ion-spinner name="dots"></ion-spinner>
          </div>
        )}
      </Host>
    );
  }
}

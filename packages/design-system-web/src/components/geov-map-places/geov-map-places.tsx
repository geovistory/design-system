import { Component, h, Host, Prop, State, Element } from '@stencil/core';
import { isNode } from '../../lib/isNode';
import { importMapLibre } from '../../lib/importMapLibre';
import { SparqlBinding, SparqlRes, sparqlJson } from '../../lib/sparqlJson';
import type { LngLatBounds } from 'maplibre-gl';

type SparqlResponse = {
  classnames: SparqlBinding;
  classcounts: SparqlBinding;
};

/**
 * This component fetches <a href="https://ontome.net/ontology/c363">geographical places</a> from a project's SPARQL endpoint and their
 * <a href="https://ontome.net/ontology/c51">coordinates</a> using <a href="https://ontome.net/ontology/p147">had presence</a>
 * and <a href="https://ontome.net/ontology/p148">was at</a>) properties, then displays them on a map. The map shows
 * linked markers that guide users to the respective locations within the project. The map is built using on MapLibre.
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
  @Prop() limit: number = 10000;

  /**
   * The center of the map
   */
  @Prop() center: [number, number] = [8.2318, 46.7985];

  /**
   * The initial zoomlevel of the map
   */
  @Prop() zoom: number = 6;

  /**
   * The results are restricted to the visible part of the map
   */
  @Prop() queryBoundingBox: boolean = true;

  /**
   * The ID of the project to be redirected to
   */
  @Prop() projectID: number;

  @State() loading: boolean;

  @State() markers = {
    type: 'FeatureCollection',
    features: [],
    ids: new Set(),
  };

  async componentDidLoad() {
    // If we are in a browser
    if (!isNode()) {
      this.loading = true;
      // Load MapLibre script
      const MapLibre = await importMapLibre();
      const map = new MapLibre.Map({
        container: this.el,
        style: {
          version: 8,
          sources: {
            osm: {
              type: 'raster',
              tiles: [
                'https://a.basemaps.cartocdn.com/rastertiles/light_nolabels/{z}/{x}/{y}{ratio}.png',
                'https://b.basemaps.cartocdn.com/rastertiles/light_nolabels/{z}/{x}/{y}{ratio}.png',
                'https://c.basemaps.cartocdn.com/rastertiles/light_nolabels/{z}/{x}/{y}{ratio}.png',
              ],
              tileSize: 256,
              attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
              maxzoom: 19,
            },
          },
          layers: [
            {
              id: 'osm',
              type: 'raster',
              source: 'osm', // This must match the source key above
            },
          ],
          glyphs: 'https://demotiles.maplibre.org/font/{fontstack}/{range}.pbf',
        },
        center: this.center,
        zoom: this.zoom,
      });

      // request to the provided sparql endpoint
      const qrPlaces = (bounds: LngLatBounds) => `
      PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
      PREFIX ontome: <https://ontome.net/ontology/>
      PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

      SELECT ?subject ?geoPlaceLabel ?long ?lat
          WHERE {?subject ^ontome:p147 ?presence.
          ?subject rdfs:label    ?geoPlaceLabel.
          ?presence ontome:p148 ?place.
          bind(replace(str(?place), '<http://www.opengis.net/def/crs/EPSG/0/4326>', "", "i") as ?rep)
          bind( replace( str(?rep), "^[^0-9\.-]*([-]?[0-9\.]+) .*$", "$1" ) as ?long )
          bind( replace( str(?rep), "^.* ([-]?[0-9\.]+)[^0-9\.]*$", "$1" ) as ?lat )
          ${
            this.queryBoundingBox
              ? `
          FILTER (
            xsd:double(?lat) >= ${bounds._sw.lat.toFixed(3)} &&
            xsd:double(?lat) <= ${bounds._ne.lat.toFixed(3)} &&
            xsd:double(?long) >= ${bounds._sw.lng.toFixed(3)} &&
            xsd:double(?long) <= ${bounds._ne.lng.toFixed(3)}
        )`
              : ''
          }
        }
        LIMIT ${this.limit}
          `;

      map.on('load', () => {
        map.addSource('places', {
          type: 'geojson',
          data: this.markers,
          cluster: true,
          clusterMaxZoom: 12, // Max zoom to cluster points on
          clusterRadius: 40, // Radius of each cluster when clustering points (defaults to 50)
        });
        const computedStyle = getComputedStyle(this.el);
        const customColors = [
          computedStyle.getPropertyValue('--point-color') || 'red',
          computedStyle.getPropertyValue('--circle-color-small') || 'red',
          computedStyle.getPropertyValue('--circle-color-medium') || 'green',
          computedStyle.getPropertyValue('--circle-color-large') || 'grey',
        ];

        map.addLayer({
          id: 'clusters',
          type: 'circle',
          source: 'places',
          filter: ['has', 'point_count'],
          paint: {
            // Use step expressions (https://maplibre.org/maplibre-style-spec/#expressions-step)
            // with three steps to implement three types of circles:
            //   * --circle-color-small, 20px circles when point count is less than 100
            //   * --circle-color-medium, 30px circles when point count is between 100 and 750
            //   * --circle-color-large, 40px circles when point count is greater than or equal to 750
            'circle-color': ['step', ['get', 'point_count'], customColors[1], 100, customColors[2], 750, customColors[3]],
            'circle-radius': ['step', ['get', 'point_count'], 20, 100, 30, 750, 40],
          },
        });

        map.addLayer({
          id: 'cluster-count',
          type: 'symbol',
          source: 'places',
          filter: ['has', 'point_count'],
          layout: {
            'text-field': '{point_count_abbreviated}',
            'text-size': 12,
          },
        });

        map.addLayer({
          id: 'unclustered-point',
          type: 'circle',
          source: 'places',
          filter: ['!', ['has', 'point_count']],
          paint: {
            // --point-color
            'circle-color': customColors[0],
            'circle-radius': 10,
          },
        });

        //   Add popups to the markers
        const handleMarkerClick = e => {
          const feature = e.features[0];
          const coordinates = feature.geometry.coordinates;
          const description = feature.properties.name;
          const link = this.projectID ? `${feature.properties.link}?p=${this.projectID}` : feature.properties.link;
          new MapLibre.Popup().setLngLat(coordinates).setHTML(`<div><a href = "${link}" target="_blank">${description}</a></div>`).addTo(map);
        };

        // An on click event listener for the "unclustered-point" layer
        map.on('click', 'unclustered-point', handleMarkerClick);

        map.on('mouseenter', 'unclustered-point', () => {
          map.getCanvas().style.cursor = 'pointer';
        });
        map.on('mouseleave', 'unclustered-point', () => {
          map.getCanvas().style.cursor = '';
        });
        // Fetch data from the SPARQL endpoint
        sparqlJson<SparqlResponse>(this.sparqlEndpoint, qrPlaces(map.getBounds())).then(res => this.parseResponse(res, map));
      });

      if (this.queryBoundingBox) {
        // Limit the query whenever vie is moved/zoomed
        map.on('moveend', () => {
          // Remove the card
          this.el.querySelectorAll('ion-card')?.forEach(ele => ele.style.setProperty('display', 'none'));
          // Fetch data from the SPARQL endpoint
          sparqlJson<SparqlResponse>(this.sparqlEndpoint, qrPlaces(map.getBounds())).then(res => this.parseResponse(res, map));
        });
      }
      this.loading = false;
    }
  }

  parseResponse = (res: SparqlRes<SparqlResponse>, mapObject) => {
    // Parse the response and update the markers on the map
    const response = res?.results?.bindings;

    // If there are too many results, show a card
    if (response.length >= this.limit) {
      const card = this.el.querySelector('ion-card');
      card.style.setProperty('display', 'block');
      card.querySelector('ion-card-title').innerHTML = `Too many results (${response.length})`;
    }

    response.forEach(ele => {
      const featureId = ele['subject'].value;
      const locName = ele['geoPlaceLabel'].value;

      if (!this.markers.ids.has(featureId)) {
        this.markers.features.push({
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [parseFloat(ele['long'].value), parseFloat(ele['lat'].value)],
          },
          properties: {
            name: locName,
            link: featureId,
          },
        });

        this.markers.ids.add(featureId);
      }
    });
    mapObject.getSource('places').setData(this.markers);
  };

  render() {
    return (
      <Host>
        {this.loading && (
          <div style={{ width: 100 + '%', height: 100 + '%' }} class="loading">
            <ion-spinner name="dots"></ion-spinner>
          </div>
        )}
        <ion-card style={{ display: 'none', zIndex: '1000' }}>
          <ion-card-header>
            <ion-card-title>Too many results</ion-card-title>
          </ion-card-header>

          <ion-card-content>please zoom in to see all available datapoints in a given location</ion-card-content>
        </ion-card>
      </Host>
    );
  }
}

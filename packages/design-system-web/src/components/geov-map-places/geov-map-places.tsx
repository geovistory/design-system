import { Component, h, Host, Prop, State, Element } from '@stencil/core';
import { isNode } from '../../lib/isNode';
import { importMapLibre } from '../../lib/importMapLibre';
import { SparqlBinding, SparqlRes, sparqlJson } from '../../lib/sparqlJson';
import { flag } from 'ionicons/icons';
import { LngLatBounds } from 'maplibre-gl';

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
        style: 'https://demotiles.maplibre.org/style.json',
        center: this.center,
        zoom: this.zoom,
        minZoom: 1,
        maxZoom: 8,
        maxBounds: [
          [-180, -90],
          [100, 90],
        ],
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
          clusterMaxZoom: 14, // Max zoom to cluster points on
          clusterRadius: 50, // Radius of each cluster when clustering points (defaults to 50)
        });

        map.addLayer({
          id: 'clusters',
          type: 'circle',
          source: 'places',
          filter: ['has', 'point_count'],
          paint: {
            // Use step expressions (https://maplibre.org/maplibre-style-spec/#expressions-step)
            // with three steps to implement three types of circles:
            //   * Blue, 20px circles when point count is less than 100
            //   * Yellow, 30px circles when point count is between 100 and 750
            //   * Pink, 40px circles when point count is greater than or equal to 750
            'circle-color': ['step', ['get', 'point_count'], '#51bbd6', 100, '#f1f075', 750, '#f28cb1'],
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

        // Workaround for https://bugzilla.mozilla.org/show_bug.cgi?id=700533
        // From https://webcompat.com/issues/64352
        function ensureSVGWidthHeight(svgElem) {
          if (!svgElem.getAttribute('width') || !svgElem.getAttribute('height')) {
            const viewBox = svgElem.getAttribute('viewBox');
            if (viewBox) {
              const match = viewBox.match(/\w+ \w+ (\w+) (\w+)/);
              const viewBoxWidth = match[1];
              const viewBoxHeight = match[2];
              svgElem.setAttribute('width', viewBoxWidth + 'px');
              svgElem.setAttribute('height', viewBoxHeight + 'px');
            }
          }
          return svgElem;
        }

        function svgStringToImageSrc(svgString) {
          svgString = svgString.substring(svgString.indexOf('<svg'));
          const parser = new DOMParser();
          const svgXML = parser.parseFromString(svgString, 'image/svg+xml');
          const fixedSvgXML = ensureSVGWidthHeight(svgXML.rootElement);
          const fixedSvgString = new XMLSerializer().serializeToString(fixedSvgXML);
          return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(fixedSvgString);
        }

        const image = new Image(20, 20);
        image.onload = () => {
          map.addImage('flag', image, { pixelRatio: window.devicePixelRatio });
          map.addLayer({
            id: 'unclustered-point',
            type: 'symbol',
            source: 'places',
            filter: ['!', ['has', 'point_count']],
            layout: {
              'icon-image': 'flag',
              'icon-size': 1,
              'icon-allow-overlap': true,
            },
          });
        };
        image.src = svgStringToImageSrc(flag);

        map.on('mouseenter', 'clusters', () => {
          map.getCanvas().style.cursor = 'pointer';
        });
        map.on('mouseleave', 'clusters', () => {
          map.getCanvas().style.cursor = '';
        });
        // Fetch data from the SPARQL endpoint
        sparqlJson<SparqlResponse>(this.sparqlEndpoint, qrPlaces(map.getBounds())).then(res => this.parseResponse(res, map));
      });

      if (this.queryBoundingBox) {
        // Limit the query whenever vie is moved/zoomed
        map.on('moveend', () => {
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

    response.forEach(ele => {
      const featureId = ele['subject'].value;

      if (!this.markers.ids.has(featureId)) {
        this.markers.features.push({
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [parseFloat(ele['long'].value), parseFloat(ele['lat'].value)],
          },
          properties: {
            name: ele['geoPlaceLabel'].value,
            link: ele['subject'].value,
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
          <div style={{ width: 100 + '%', height: 1000 + '%' }} class="loading">
            <ion-spinner name="dots"></ion-spinner>
          </div>
        )}
      </Host>
    );
  }
}

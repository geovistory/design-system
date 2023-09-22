import { Component, h, Host, Prop, State, Element } from '@stencil/core';
import { isNode } from '../../lib/isNode';
import { importMapLibre } from '../../lib/importMapLibre';
import { SparqlBinding, sparqlJson } from '../../lib/sparqlJson';
import { flag } from 'ionicons/icons';

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

  @State() markers = {
    type: 'FeatureCollection',
    features: [],
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
        center: [0, 0],
        zoom: 1,
      });
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

        /*map.addLayer({
          id: 'ununclustered-point',
          type: 'symbol',
          source: 'places',
          filter: ['!', ['has', 'point_count']],
          layout: {
            'text-size': 36,
            'text-field': '*',
            'text-offset': [0, 0],
            'text-anchor': 'top',
          },
          paint: {
            'text-color': '#f16624',
            'text-halo-color': '#fff',
            'text-halo-width': 2,
          },
        });*/

        map.on('mouseenter', 'clusters', () => {
          map.getCanvas().style.cursor = 'pointer';
        });
        map.on('mouseleave', 'clusters', () => {
          map.getCanvas().style.cursor = '';
        });
      });

      // Send the request to the provided sparql endpoint
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
      sparqlJson<SparqlResponse>(this.sparqlEndpoint, qrPlaces).then(res => {
        // Parse the response
        const response = res?.results?.bindings;
        console.log(response);
        console.log(this.markers);

        response.forEach(ele => {
          this.markers.features = [
            ...this.markers.features,
            {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [parseFloat(ele['long'].value), parseFloat(ele['lat'].value)],
              },
              properties: {
                name: ele['geoPlaceLabel'].value,
                link: ele['subject'].value,
              },
            },
          ];
        });

        /*for (const ele in response) {
          // Adding Marker
          new MapLibre.Marker({ color: 'var(--title-color)' }).setLngLat([parseFloat(response[ele]['long'].value), parseFloat(response[ele]['lat'].value)]).addTo(map);
        }*/
        this.loading = false;
        console.log(this.markers);
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

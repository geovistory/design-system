import { Component, Host, Prop, State, h } from '@stencil/core';
import type { Parser } from '@triply/yasr';
import { DataDrivenPropertyValueSpecification, LngLatBoundsLike } from 'maplibre-gl';
import { importMapLibre } from '../../lib/importMapLibre';
import { isNode } from '../../lib/isNode';
import { GeovMapCirclesPopup, PopupItem } from '../geov-map-circles-popup/geov-map-circles-popup';

function createGeoJSON(data: Parser.Binding[], labelIndices: string[]) {
  return {
    type: 'FeatureCollection',
    features: data.map(ele => {
      return {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [parseFloat(ele['long'].value), parseFloat(ele['lat'].value)],
        },
        //set the properties to the .value of the ele
        properties: {
          label: ele['label']?.value,
          radius: Math.round((parseFloat(ele['radius']?.value) || 0) * 10) / 10,
          number: parseInt(ele['number']?.value),
          type: ele['type']?.value || 'none',
          typeindex: labelIndices.indexOf(ele['type']?.value || 'none'),
          link: ele['link']?.value,
          children: ele['children']?.value,
        },
      };
    }),
  };
}

/**
 * This component is used by Yasgui as a plugin. It consumes the data from Yasgui.
 *
 * The result is displayed as circles of different sizes on a map.
 */
@Component({
  tag: 'geov-yasgui-map-circles',
  styleUrl: 'geov-yasgui-map-circles.css',
  shadow: false,
})
export class GeovYasguiMapCircles {
  mapContainerEl: HTMLElement;
  cardEl: HTMLElement;

  @Prop() data: Parser.Binding[] = [
    {
      radius: { value: '80.2345', type: 'literal' },
      number: { value: '0', type: 'literal' },
      type: { value: 'default', type: 'literal' },
      long: { value: '8.2318', type: 'literal' },
      lat: { value: '46.7985', type: 'literal' },
      label: { value: 'default', type: 'literal' },
      link: { value: 'default', type: 'literal' },
    },
  ];

  /**
   * The minimum radius of a circle.
   */
  @Prop() radiusMin = 8;

  /**
   * The maximum radius of a circle.
   */
  @Prop() radiusMax = 20;

  /**
   * The maximum zoom level to allow when the map view transitions to the specified bounds,
   * when the map is initialized.
   */
  @Prop() maxZoom = 10;

  @State() labelIndices: string[] = [...new Set(this.data.map(ele => ele['type']?.value || 'none'))];

  @Prop() colorScale: string[] = ['#a6cee3', '#1f78b4', '#b2df8a', '#33a02c']; // ColorBrewer2 qualitative 4-class Paired (colorblind safe)

  async componentDidLoad() {
    // If we are in a browser
    if (!isNode()) {
      /*
       * Validation: Long and Lat must be numbers and < 540 and > -540, they can also not be omitted
       * Radius must be a number and not 0, it can be omitted
       * Number must be a number, it can be omitted
       */
      const invalidPoints = this.data.filter(d => {
        //@ts-ignore - we want the coercion of isNan
        if (Object.hasOwn(d, 'radius') && (isNaN(d['radius']?.value) || Number(d['radius']?.value) === 0)) return true;
        //@ts-ignore - we want the coercion of isNan
        if (Object.hasOwn(d, 'number') && isNaN(d['number']?.value)) return true;
        return (
          Number(d['long']?.value) < -180 ||
          Number(d['long']?.value) > 180 ||
          Number(d['lat']?.value) < -90 ||
          Number(d['lat']?.value) > 90 ||
          //@ts-ignore - we want the coercion of isNan
          isNaN(d['long']?.value) ||
          //@ts-ignore - we want the coercion of isNan
          isNaN(d['lat']?.value)
        );
      });

      if (!invalidPoints?.length) {
        // Load MapLibre script
        const MapLibre = await importMapLibre();
        const map = new MapLibre.Map({
          container: this.mapContainerEl,
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
          zoom: 6,
        });

        /*
         * move the map to the bounds of the data
         */
        let minLng = Number.MAX_VALUE;
        let maxLng = Number.MIN_VALUE;
        let minLat = Number.MAX_VALUE;
        let maxLat = Number.MIN_VALUE;

        // Find the bounds of the data
        this.data.forEach(d => {
          const lng = parseFloat(d['long'].value);
          const lat = parseFloat(d['lat'].value);
          minLng = Math.min(minLng, lng);
          maxLng = Math.max(maxLng, lng);
          minLat = Math.min(minLat, lat);
          maxLat = Math.max(maxLat, lat);
        });

        const bounds: LngLatBoundsLike = [
          [minLng, minLat],
          [maxLng, maxLat],
        ];

        map.fitBounds(bounds, {
          padding: 50, // Optional padding to provide some space around the bounding box
          maxZoom: this.maxZoom, // Maximum zoom to use
          animate: false,
        });

        map.on('load', () => {
          map.addSource('places', {
            type: 'geojson',
            data: createGeoJSON(this.data, this.labelIndices),
          });
          const maxRadius = Math.max(...this.data.map(d => parseInt(d['radius']?.value) || 0)); // get the max radius (if any)
          let colorSteps: Array<string | number | Array<string | number>> | string;
          if (this.colorScale.length < 2) {
            colorSteps = this.colorScale[0];
          } else {
            colorSteps = ['step', ['get', 'typeindex']];
            for (let i = 0; i < this.colorScale.length; i++) {
              if (i > 0) colorSteps.push(i);
              colorSteps.push(this.colorScale[i]);
            }
          }

          map.addLayer({
            id: 'circles',
            type: 'circle',
            source: 'places',
            paint: {
              'circle-color': colorSteps as DataDrivenPropertyValueSpecification<string>,
              'circle-radius': maxRadius ? ['interpolate', ['linear'], ['get', 'radius'], 0, this.radiusMin, maxRadius, this.radiusMax] : this.radiusMin, // if there is no radius, use 8px
              'circle-opacity': 0.8,
            },
          });

          //   Add popups to the markers
          const handleMarkerClick = e => {
            const coordinates = e.features[0].geometry.coordinates;
            // let html = `<ul>`;
            const pupupData: GeovMapCirclesPopup['items'] = e.features.map(
              (feature: {
                properties: {
                  link: string;
                  label: string;
                  number: string;
                  children?: string;
                };
              }) => {
                let children = [];
                try {
                  children = JSON.parse(feature.properties.children);
                } catch {}
                const pupupItem: PopupItem = {
                  label: feature.properties.label,
                  url: feature.properties.link,
                  suffix: feature.properties.number,
                  items: children.map(c => ({
                    label: c?.label,
                    url: c?.url,
                  })),
                };
                return pupupItem;
              },
            );

            const el = document.createElement('geov-map-circles-popup');
            el.items = pupupData;
            new MapLibre.Popup().setLngLat(coordinates).setDOMContent(el).setMaxWidth('340px').addTo(map);
          };

          // An on click event listener for the "circles" layer
          map.on('click', 'circles', handleMarkerClick);

          map.on('mouseenter', 'circles', () => {
            map.getCanvas().style.cursor = 'pointer';
          });
          map.on('mouseleave', 'circles', () => {
            map.getCanvas().style.cursor = '';
          });
        });
      }
    }
  }

  render() {
    return (
      <Host>
        <ion-card class="legend">
          <ion-card-content>
            <ul>
              {this.labelIndices.map((type, i) => (
                <li>
                  <svg height="1rem" width="1rem">
                    <circle cx="50%" cy="50%" r="50%" fill={this.colorScale[i % this.colorScale.length]} />
                  </svg>
                  &nbsp;
                  {type}
                </li>
              ))}
            </ul>
          </ion-card-content>
        </ion-card>
        <div class="geov-map-circles-container" ref={el => (this.mapContainerEl = el)} />
      </Host>
    );
  }
}

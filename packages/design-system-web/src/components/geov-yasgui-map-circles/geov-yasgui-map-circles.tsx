import { Component, Host, h, Prop, Element, State } from '@stencil/core';
import { isNode } from '../../lib/isNode';
import type { Parser } from '@triply/yasr';
import { importMapLibre } from '../../lib/importMapLibre';
import { DataDrivenPropertyValueSpecification, LngLatBoundsLike } from 'maplibre-gl';

function createGeoJSON(data: Parser.Binding[]) {
  const labelIndices = [...new Set(data.map(ele => ele['type'].value))];
  console.log(labelIndices);
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
          label: ele['label'].value,
          radius: Math.round(parseFloat(ele['radius'].value) * 10) / 10,
          number: parseInt(ele['number'].value),
          type: ele['type'].value,
          typeindex: labelIndices.indexOf(ele['type'].value),
          link: ele['link'].value,
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
  @Element() el: HTMLElement;

  @State() loading: boolean;

  @Prop() data: Parser.Binding[] = [
    {
      radius: { value: '80.2345', type: 'literal' },
      number: { value: '0', type: 'literal' },
      type: { value: 'default', type: 'literal' },
      long: { value: '0', type: 'literal' },
      lat: { value: '0', type: 'literal' },
      label: { value: 'default', type: 'literal' },
      link: { value: 'default', type: 'literal' },
    },
  ];

  @Prop() colorScale: string[] = ['#a6cee3', '#1f78b4', '#b2df8a', '#33a02c']; // ColorBrewer2 qualitative 4-class Paired (colorblind safe)

  /**
   * The initial zoomlevel of the map
   */
  @Prop() zoom: number = 6;

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
        zoom: this.zoom,
      });
      let minLng = Number.MAX_VALUE;
      let maxLng = Number.MIN_VALUE;
      let minLat = Number.MAX_VALUE;
      let maxLat = Number.MIN_VALUE;

      // Assuming markers is an array of marker objects with latLng properties
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
        maxZoom: 15, // Optional maximum zoom level
      });

      map.on('load', () => {
        map.addSource('places', {
          type: 'geojson',
          data: createGeoJSON(this.data),
        });
        console.log(createGeoJSON(this.data));
        const maxRadius = Math.max(...this.data.map(d => parseInt(d['radius'].value)));
        const colorSteps: Array<string | number | Array<string | number>> = ['step', ['get', 'typeindex']];
        for (let i = 0; i < this.colorScale.length; i++) {
          if (i > 0) colorSteps.push(i);
          colorSteps.push(this.colorScale[i]);
        }

        map.addLayer({
          id: 'circles',
          type: 'circle',
          source: 'places',
          paint: {
            'circle-color': colorSteps as DataDrivenPropertyValueSpecification<string>,
            'circle-radius': ['interpolate', ['linear'], ['get', 'radius'], 0, 10, maxRadius, 100],
          },
        });
      });
    }
  }

  render() {
    return <Host></Host>;
  }
}

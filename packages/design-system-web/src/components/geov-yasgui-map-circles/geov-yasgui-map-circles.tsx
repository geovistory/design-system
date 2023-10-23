import { Component, Host, h, Prop, Element, State } from '@stencil/core';
import { isNode } from '../../lib/isNode';
import type { Parser } from '@triply/yasr';
import { importMapLibre } from '../../lib/importMapLibre';

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

  @Prop() data: Parser.Binding[];

  @Prop() colorScale: string[] = ['#a6cee3', '#1f78b4', '#b2df8a', '#33a02c']; // ColorBrewer2 qualitative 4-class Paired (colorblind safe)

  /**
   * The initial zoomlevel of the map
   */
  @Prop() zoom: number = 6;

  async componentDidLoad() {
    // If we are in a browser
    if (!isNode()) {
      this.loading = true;

      const maxRadius = Math.max(...this.data.map(d => d['radius'] as unknown as number));
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
      map.on('load', () => {
        map.addSource('places', {
          type: 'geojson',
          data: this.data,
        });

        map.addLayer({
          id: 'circles',
          type: 'circle',
          source: 'places',
          paint: {
            'circle-color': ['step', ['get', 'typeindex'], this.colorScale[0], 1, this.colorScale[1], 2, this.colorScale[2], 3, this.colorScale[3]], //make this dynamic
            'circle-radius': ['interpolate', ['linear'], ['get', 'radius'], 0, 0, maxRadius, 1000],
          },
        });
      });
    }
  }

  render() {
    return <Host></Host>;
  }
}

import { Component, Host, h, Prop, Element, State } from '@stencil/core';
import { isNode } from '../../lib/isNode';
import type { Parser } from '@triply/yasr';
import { importMapLibre } from '../../lib/importMapLibre';
import { DataDrivenPropertyValueSpecification, LngLatBoundsLike } from 'maplibre-gl';

function createGeoJSON(data: Parser.Binding[]) {
  const labelIndices = [...new Set(data.map(ele => ele['type']?.value || 'none'))];
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
      long: { value: '8.2318', type: 'literal' },
      lat: { value: '46.7985', type: 'literal' },
      label: { value: 'default', type: 'literal' },
      link: { value: 'default', type: 'literal' },
    },
  ];

  @Prop() colorScale: string[] = ['#a6cee3', '#1f78b4', '#b2df8a', '#33a02c']; // ColorBrewer2 qualitative 4-class Paired (colorblind safe)

  async componentDidLoad() {
    // If we are in a browser
    if (!isNode()) {
      this.loading = true;
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
          Number(d['long']?.value) < -540 ||
          Number(d['long']?.value) > 540 ||
          Number(d['lat']?.value) < -540 ||
          Number(d['lat']?.value) > 540 ||
          //@ts-ignore - we want the coercion of isNan
          isNaN(d['long']?.value) ||
          //@ts-ignore - we want the coercion of isNan
          isNaN(d['lat']?.value)
        );
      });

      if (invalidPoints.length > 0) {
        let invalidList = '';
        invalidPoints.forEach(d => {
          invalidList += `<li>${d['label']?.value || 'no label'} (long: ${d['long']?.value}, lat: ${d['lat']?.value}, radius: ${d['radius']?.value}, number: ${d['number']
            ?.value})</li>`;
        });
        const card = this.el.querySelector('ion-card');
        card.style.setProperty('display', 'block');
        card.querySelector('ion-card-title').innerHTML = `Unable to render ${invalidPoints.length} result${invalidPoints.length > 1 ? 's' : ''}`;
        card.querySelector(
          'ion-card-content',
        ).innerHTML = `<p>not all of the results have longitude and latitude-coordinates or they are not parseable to a floating point number:</p><ul>${invalidList}</ul>`;
      } else {
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
          maxZoom: 10, // Maximum zoom to use
        });

        map.on('load', () => {
          map.addSource('places', {
            type: 'geojson',
            data: createGeoJSON(this.data),
          });
          const maxRadius = Math.max(...this.data.map(d => parseInt(d['radius']?.value) || 0)); // get the max radius (if any)
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
              'circle-radius': maxRadius ? ['interpolate', ['linear'], ['get', 'radius'], 0, 8, maxRadius, 60] : 8, // if there is no radius, use 8px
              'circle-opacity': 0.8,
            },
          });

          //   Add popups to the markers
          const handleMarkerClick = e => {
            const coordinates = e.features[0].geometry.coordinates;
            let html = `<ul>`;
            e.features.forEach((feature: { properties: { link: string; label: string; number: string } }) => {
              const props = feature.properties;
              // differentiate between a few cases: if theres a link, make it clickable, otherwise check if there also is missing a label
              html += '<li>';
              if (props?.link) {
                html += `<p><b><a href = "${props.link}" target="_blank">${props?.label || 'no label'}</a></b>`;
              } else if (props?.label) {
                html += `<p><b>${props.label}</b>`;
              } else {
                html += `<p><b>no label</b>`;
              }

              if (props?.number) {
                html += `: ${props.number}</p>`;
              } else {
                html += `</p>`;
              }
              html += '</li>';
            });
            html += `</ul>`;
            new MapLibre.Popup().setLngLat(coordinates).setHTML(html).addTo(map);
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
        <ion-card style={{ display: 'none', zIndex: '1000' }}>
          <ion-card-header>
            <ion-card-title>Unable to render (some) results</ion-card-title>
          </ion-card-header>

          <ion-card-content>not all of the results have longitude and latitude-coordinates</ion-card-content>
        </ion-card>
      </Host>
    );
  }
}

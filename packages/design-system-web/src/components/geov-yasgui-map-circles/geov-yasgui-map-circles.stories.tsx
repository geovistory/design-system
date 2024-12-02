import { h } from '@stencil/core';
import type { Parser } from '@triply/yasr';
import { stencilWrapper } from '../../../.storybook/lib/stencilWrapper';
import { docsTemlpate } from '../../../.storybook/templates/docsTemplate';
import componentApi from './docs-component-api.md?raw';
import overview from './docs-overview.md?raw';
export default {
  title: 'Data Visualization Components/Map Circles',
  tags: ['autodocs'],
  parameters: {
    viewMode: 'docs',
    docs: {
      page: () => docsTemlpate(overview, componentApi),
    },
  },
};

const completeData: Parser.Binding[] = [
  {
    label: {
      type: 'literal',
      value: 'Val Monastero',
    },
    long: {
      type: 'literal',
      datatype: 'http://www.w3.org/2001/XMLSchema#float',
      value: '10.425',
    },
    lat: {
      type: 'literal',
      datatype: 'http://www.w3.org/2001/XMLSchema#float',
      value: '46.601944',
    },
    radius: {
      type: 'literal',
      datatype: 'http://www.w3.org/2001/XMLSchema#decimal',
      value: '4.5',
    },
    number: {
      type: 'literal',
      datatype: 'http://www.w3.org/2001/XMLSchema#integer',
      value: '9',
    },
    type: {
      type: 'literal',
      value: 'Area geografica',
    },
    link: {
      type: 'literal',
      value: 'http://geovistory.org/resource/i1690080?p=591',
    },
    children: {
      type: 'literal',
      value:
        '[{ "label": "Child 2.1", "url": "http://foo.2.1.bar" },{ "label": "Child 2.2", "url": "http://foo.2.2.bar" }, { "label": "Child 2.2", "url": "http://foo.2.2.bar" },{ "label": "Child 2.2", "url": "http://foo.2.2.bar" },{ "label": "Child 2.2", "url": "http://foo.2.2.bar" }]',
    },
  },
  {
    label: {
      type: 'literal',
      value: 'Montebelluna',
    },
    long: {
      type: 'literal',
      datatype: 'http://www.w3.org/2001/XMLSchema#float',
      value: '12.038889',
    },
    lat: {
      type: 'literal',
      datatype: 'http://www.w3.org/2001/XMLSchema#float',
      value: '45.775278',
    },
    radius: {
      type: 'literal',
      datatype: 'http://www.w3.org/2001/XMLSchema#decimal',
      value: '1.5',
    },
    number: {
      type: 'literal',
      datatype: 'http://www.w3.org/2001/XMLSchema#integer',
      value: '3',
    },
    type: {
      type: 'literal',
      value: 'Città',
    },
    link: {
      type: 'literal',
      value: 'http://geovistory.org/resource/i1551563?p=591',
    },
  },
  {
    label: {
      type: 'literal',
      value: 'Valmareno',
    },
    long: {
      type: 'literal',
      datatype: 'http://www.w3.org/2001/XMLSchema#float',
      value: '12.126667',
    },
    lat: {
      type: 'literal',
      datatype: 'http://www.w3.org/2001/XMLSchema#float',
      value: '45.968333',
    },
    radius: {
      type: 'literal',
      datatype: 'http://www.w3.org/2001/XMLSchema#decimal',
      value: '3.0',
    },
    number: {
      type: 'literal',
      datatype: 'http://www.w3.org/2001/XMLSchema#integer',
      value: '6',
    },
    type: {
      type: 'literal',
      value: 'Luogo abitato',
    },
    link: {
      type: 'literal',
      value: 'http://geovistory.org/resource/i760808?p=591',
    },
  },
  {
    label: {
      type: 'literal',
      value: 'Villabassa',
    },
    long: {
      type: 'literal',
      datatype: 'http://www.w3.org/2001/XMLSchema#float',
      value: '12.17266',
    },
    lat: {
      type: 'literal',
      datatype: 'http://www.w3.org/2001/XMLSchema#float',
      value: '46.73781',
    },
    radius: {
      type: 'literal',
      datatype: 'http://www.w3.org/2001/XMLSchema#decimal',
      value: '2.5',
    },
    number: {
      type: 'literal',
      datatype: 'http://www.w3.org/2001/XMLSchema#integer',
      value: '5',
    },
    type: {
      type: 'literal',
      value: 'Città',
    },
    link: {
      type: 'literal',
      value: 'http://geovistory.org/resource/i1031781?p=591',
    },
  },
  {
    label: {
      type: 'literal',
      value: 'San Giovanni Bianco',
    },
    long: {
      type: 'literal',
      datatype: 'http://www.w3.org/2001/XMLSchema#float',
      value: '9.65',
    },
    lat: {
      type: 'literal',
      datatype: 'http://www.w3.org/2001/XMLSchema#float',
      value: '45.866667',
    },
    radius: {
      type: 'literal',
      datatype: 'http://www.w3.org/2001/XMLSchema#decimal',
      value: '4.5',
    },
    number: {
      type: 'literal',
      datatype: 'http://www.w3.org/2001/XMLSchema#integer',
      value: '9',
    },
    type: {
      type: 'literal',
      value: 'Città',
    },
    link: {
      type: 'literal',
      value: 'http://geovistory.org/resource/i836206?p=591',
    },
  },
  {
    label: {
      type: 'literal',
      value: 'Zermen',
    },
    long: {
      type: 'literal',
      datatype: 'http://www.w3.org/2001/XMLSchema#float',
      value: '11.943056',
    },
    lat: {
      type: 'literal',
      datatype: 'http://www.w3.org/2001/XMLSchema#float',
      value: '46.023611',
    },
    radius: {
      type: 'literal',
      datatype: 'http://www.w3.org/2001/XMLSchema#decimal',
      value: '0.5',
    },
    number: {
      type: 'literal',
      datatype: 'http://www.w3.org/2001/XMLSchema#integer',
      value: '1',
    },
    type: {
      type: 'literal',
      value: 'Luogo abitato',
    },
    link: {
      type: 'literal',
      value: 'http://geovistory.org/resource/i1250558?p=591',
    },
  },
];
const manyTypes: Parser.Binding[] = [
  {
    label: {
      type: 'literal',
      value: 'Val Monastero',
    },
    long: {
      type: 'literal',
      datatype: 'http://www.w3.org/2001/XMLSchema#float',
      value: '10.425',
    },
    lat: {
      type: 'literal',
      datatype: 'http://www.w3.org/2001/XMLSchema#float',
      value: '46.601944',
    },
    radius: {
      type: 'literal',
      datatype: 'http://www.w3.org/2001/XMLSchema#decimal',
      value: '4.5',
    },
    number: {
      type: 'literal',
      datatype: 'http://www.w3.org/2001/XMLSchema#integer',
      value: '9',
    },
    type: {
      type: 'literal',
      value: 'Area geografica',
    },
    link: {
      type: 'literal',
      value: 'http://geovistory.org/resource/i1690080?p=591',
    },
    children: {
      type: 'literal',
      value:
        '[{ "label": "Child 2.1", "url": "http://foo.2.1.bar" },{ "label": "Child 2.2", "url": "http://foo.2.2.bar" }, { "label": "Child 2.2", "url": "http://foo.2.2.bar" },{ "label": "Child 2.2", "url": "http://foo.2.2.bar" },{ "label": "Child 2.2", "url": "http://foo.2.2.bar" }]',
    },
  },
  {
    label: {
      type: 'literal',
      value: 'Montebelluna',
    },
    long: {
      type: 'literal',
      datatype: 'http://www.w3.org/2001/XMLSchema#float',
      value: '12.038889',
    },
    lat: {
      type: 'literal',
      datatype: 'http://www.w3.org/2001/XMLSchema#float',
      value: '45.775278',
    },
    radius: {
      type: 'literal',
      datatype: 'http://www.w3.org/2001/XMLSchema#decimal',
      value: '1.5',
    },
    number: {
      type: 'literal',
      datatype: 'http://www.w3.org/2001/XMLSchema#integer',
      value: '3',
    },
    type: {
      type: 'literal',
      value: 'Città',
    },
    link: {
      type: 'literal',
      value: 'http://geovistory.org/resource/i1551563?p=591',
    },
  },
  {
    label: {
      type: 'literal',
      value: 'Valmareno',
    },
    long: {
      type: 'literal',
      datatype: 'http://www.w3.org/2001/XMLSchema#float',
      value: '12.126667',
    },
    lat: {
      type: 'literal',
      datatype: 'http://www.w3.org/2001/XMLSchema#float',
      value: '45.968333',
    },
    radius: {
      type: 'literal',
      datatype: 'http://www.w3.org/2001/XMLSchema#decimal',
      value: '3.0',
    },
    number: {
      type: 'literal',
      datatype: 'http://www.w3.org/2001/XMLSchema#integer',
      value: '6',
    },
    type: {
      type: 'literal',
      value: 'Luogo abitato',
    },
    link: {
      type: 'literal',
      value: 'http://geovistory.org/resource/i760808?p=591',
    },
  },
  {
    label: {
      type: 'literal',
      value: 'Villabassa',
    },
    long: {
      type: 'literal',
      datatype: 'http://www.w3.org/2001/XMLSchema#float',
      value: '12.17266',
    },
    lat: {
      type: 'literal',
      datatype: 'http://www.w3.org/2001/XMLSchema#float',
      value: '46.73781',
    },
    radius: {
      type: 'literal',
      datatype: 'http://www.w3.org/2001/XMLSchema#decimal',
      value: '2.5',
    },
    number: {
      type: 'literal',
      datatype: 'http://www.w3.org/2001/XMLSchema#integer',
      value: '5',
    },
    type: {
      type: 'literal',
      value: 'Village',
    },
    link: {
      type: 'literal',
      value: 'http://geovistory.org/resource/i1031781?p=591',
    },
  },
  {
    label: {
      type: 'literal',
      value: 'San Giovanni Bianco',
    },
    long: {
      type: 'literal',
      datatype: 'http://www.w3.org/2001/XMLSchema#float',
      value: '9.65',
    },
    lat: {
      type: 'literal',
      datatype: 'http://www.w3.org/2001/XMLSchema#float',
      value: '45.866667',
    },
    radius: {
      type: 'literal',
      datatype: 'http://www.w3.org/2001/XMLSchema#decimal',
      value: '4.5',
    },
    number: {
      type: 'literal',
      datatype: 'http://www.w3.org/2001/XMLSchema#integer',
      value: '9',
    },
    type: {
      type: 'literal',
      value: 'Type XY with a very very very very very very very very long label',
    },
    link: {
      type: 'literal',
      value: 'http://geovistory.org/resource/i836206?p=591',
    },
  },
  {
    label: {
      type: 'literal',
      value: 'Zermen',
    },
    long: {
      type: 'literal',
      datatype: 'http://www.w3.org/2001/XMLSchema#float',
      value: '11.943056',
    },
    lat: {
      type: 'literal',
      datatype: 'http://www.w3.org/2001/XMLSchema#float',
      value: '46.023611',
    },
    radius: {
      type: 'literal',
      datatype: 'http://www.w3.org/2001/XMLSchema#decimal',
      value: '0.5',
    },
    number: {
      type: 'literal',
      datatype: 'http://www.w3.org/2001/XMLSchema#integer',
      value: '1',
    },
    type: {
      type: 'literal',
      value: 'Type Z',
    },
    link: {
      type: 'literal',
      value: 'http://geovistory.org/resource/i1250558?p=591',
    },
  },
];

const missingRadiusAndType: Parser.Binding[] = completeData.map(d => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  const { radius, type, ...rest } = d;
  return rest;
});

const missingLongLat: Parser.Binding[] = [{ ...completeData[0], long: null, lat: null }, ...completeData.slice(1)];

export const Default = await stencilWrapper(<geov-yasgui-map-circles maxZoom={12}></geov-yasgui-map-circles>);
export const CompleteData = await stencilWrapper(<geov-yasgui-map-circles data={completeData} radiusMin={2} radiusMax={60}></geov-yasgui-map-circles>);
export const MissingRadiusAndType = await stencilWrapper(<geov-yasgui-map-circles data={missingRadiusAndType}></geov-yasgui-map-circles>);
export const MissingLongLat = await stencilWrapper(<geov-yasgui-map-circles data={missingLongLat}></geov-yasgui-map-circles>);

/**
 * ads
 */
export const MinMaxRadius = await stencilWrapper(<geov-yasgui-map-circles data={completeData}></geov-yasgui-map-circles>);

export const Sizing = await stencilWrapper(
  <div>
    <p>height: '300px', width: '800px'</p>
    <div style={{ height: '300px', width: '800px', border: '1px solid orange' }}>
      <geov-yasgui-map-circles data={completeData} radiusMin={2} radiusMax={60}></geov-yasgui-map-circles>
    </div>
    <p>height: '300px', width: '800px'</p>
    <div style={{ height: '300px', width: '800px', border: '1px solid orange' }}>
      <geov-yasgui-map-circles data={manyTypes} radiusMin={2} radiusMax={60}></geov-yasgui-map-circles>
    </div>
    <p>height: '300px', width: '650px'</p>
    <div style={{ height: '300px', width: '650px', border: '1px solid orange' }}>
      <geov-yasgui-map-circles data={manyTypes} radiusMin={2} radiusMax={60}></geov-yasgui-map-circles>
    </div>
    <p>height: '300px', width: '320px'</p>
    <div style={{ height: '300px', width: '320px', border: '1px solid orange' }}>
      <geov-yasgui-map-circles data={manyTypes} radiusMin={2} radiusMax={60}></geov-yasgui-map-circles>
    </div>
  </div>,
);

export const DisableScrollZoom = await stencilWrapper(
  <geov-yasgui-map-circles data={completeData} disableScrollZoom={true} displayMapNavigationControls={true}></geov-yasgui-map-circles>,
);

const londonData: Parser.Binding[] = [
  {
    label: {
      type: 'literal',
      value: 'London Point1',
    },
    long: {
      type: 'literal',
      datatype: 'http://www.w3.org/2001/XMLSchema#float',
      value: '-0.12',
    },
    lat: {
      type: 'literal',
      datatype: 'http://www.w3.org/2001/XMLSchema#float',
      value: '51.5',
    },
    radius: {
      type: 'literal',
      datatype: 'http://www.w3.org/2001/XMLSchema#decimal',
      value: '4.5',
    },
    number: {
      type: 'literal',
      datatype: 'http://www.w3.org/2001/XMLSchema#integer',
      value: '9',
    },
    type: {
      type: 'literal',
      value: 'Test Type',
    },
  },
];

export const LondonMap = await stencilWrapper(
  <geov-yasgui-map-circles data={londonData} tilesURL={'https://mapwarper.net/maps/tile/24220/{z}/{x}/{y}.png'}></geov-yasgui-map-circles>,
);

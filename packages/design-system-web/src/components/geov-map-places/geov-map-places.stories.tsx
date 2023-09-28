import { h } from '@stencil/core';
import { docsTemlpate } from '../../../.storybook/templates/docsTemplate';
import { stencilWrapper } from '../../../.storybook/lib/stencilWrapper';
import componentApi from './docs-component-api.md?raw';
import overview from './docs-overview.md?raw';

export default {
  title: 'Data Visualization Components/Map of Places',
  tags: ['autodocs'],
  parameters: {
    viewMode: 'docs',
    docs: {
      page: () => docsTemlpate(overview, componentApi),
    },
  },
};

export const MapPlaces = await stencilWrapper(
  <div style={{ height: '350px' }}>
    <geov-map-places sparqlEndpoint="https://sparql.geovistory.org/api_v1_project_84760"></geov-map-places>
  </div>,
);

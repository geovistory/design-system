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

export const Basic = await stencilWrapper(
  <div style={{ height: '350px' }}>
    <geov-map-places sparqlEndpoint="https://sparql.geovistory.org/api_v1_project_84760"></geov-map-places>
  </div>,
);

/**
 * If a ProjectID is provided, the markers on the map will be linked to the project.
 */
export const WithProjectID = await stencilWrapper(
  <div style={{ height: '350px' }}>
    <geov-map-places sparqlEndpoint="https://sparql.geovistory.org/api_v1_project_84760" projectID={84760}></geov-map-places>
  </div>,
);

/**
 * If the requested number of places exceeds the limit, the map will display a warning message.
 */
export const LimitExeeded = await stencilWrapper(
  <div style={{ height: '350px' }}>
    <geov-map-places sparqlEndpoint="https://sparql.geovistory.org/api_v1_project_84760" limit={10}></geov-map-places>
  </div>,
);

/**
 * If there is no bounding box selected, the map will request all Places from the project.
 */
export const NoBoundingBox = await stencilWrapper(
  <div style={{ height: '350px' }}>
    <geov-map-places sparqlEndpoint="https://sparql.geovistory.org/api_v1_project_84760" queryBoundingBox={false}></geov-map-places>
  </div>,
);

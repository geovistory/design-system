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
 * If a projectID is provided, the markers on the map will be linked to the project.
 */
export const WithProjectID = await stencilWrapper(
  <div style={{ height: '350px' }}>
    <geov-map-places sparqlEndpoint="https://sparql.geovistory.org/api_v1_project_84760" projectID={84760}></geov-map-places>
  </div>,
);

/**
 * Customize colors using css variables.
 */
export const CustomColors = await stencilWrapper(
  <div style={{ height: '350px' }}>
    <style>{`
      .custom-colors {
        --point-color: #c2c92c;
        --circle-color-small: #59c0fc;
        --circle-color-medium: #738edf;
        --circle-color-large: #774fef;
      }
    `}</style>
    <geov-map-places class="custom-colors" sparqlEndpoint="https://sparql.geovistory.org/api_v1_project_84760" queryBoundingBox={false}></geov-map-places>
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
 * If there is no bounding box selected, the map will request all places from the project.
 */
export const NoBoundingBox = await stencilWrapper(
  <div style={{ height: '350px' }}>
    <geov-map-places sparqlEndpoint="https://sparql.geovistory.org/api_v1_project_84760" queryBoundingBox={false}></geov-map-places>
  </div>,
);

/**
 * The center and zoom of the map can be set manually.
 */
export const SetCenterAndZoom = await stencilWrapper(
  <div style={{ height: '350px' }}>
    <geov-map-places sparqlEndpoint="https://sparql.geovistory.org/api_v1_project_84760" center={[103.38973, 2.03661]} zoom={4}></geov-map-places>
  </div>,
);

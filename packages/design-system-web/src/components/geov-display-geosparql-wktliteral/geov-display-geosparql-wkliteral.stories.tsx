import { h } from '@stencil/core';
import { docsTemlpate } from '../../../.storybook/templates/docsTemplate';
import { stencilWrapper } from '../../../.storybook/lib/stencilWrapper';
import componentApi from './docs-component-api.md?raw';
import overview from './docs-overview.md?raw';
export default {
  title: 'Data Components/Entity/Display Geosparql Wkliteral',
  tags: ['autodocs'],
  parameters: {
    viewMode: 'docs',
    docs: {
      page: () => docsTemlpate(overview, componentApi),
    },
  },
};
export const DisplayGeosparqlWktliteral = await stencilWrapper(
  <geov-display-geosparql-wktliteral value="http://www.opengis.net/def/crs/EPSG/0/4326>POINT(4.79583 52.55417)"></geov-display-geosparql-wktliteral>,
);

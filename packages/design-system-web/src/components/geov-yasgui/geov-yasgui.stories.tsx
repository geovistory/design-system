import { h } from '@stencil/core';
import { docsTemlpate } from '../../../.storybook/templates/docsTemplate';
import { stencilWrapper } from '../../../.storybook/lib/stencilWrapper';
import componentApi from './docs-component-api.md?raw';
import overview from './docs-overview.md?raw';
import * as MapPlugin from '../geov-map-places/MapPlugin';

export default {
  title: 'Design Components/Yasgui',
  tags: ['autodocs'],
  parameters: {
    viewMode: 'docs',
    docs: {
      page: () => docsTemlpate(overview, componentApi),
    },
  },
};

export const Yasgui = await stencilWrapper(<geov-yasgui plugins={[MapPlugin.default]} defaultPlugin="map"></geov-yasgui>);

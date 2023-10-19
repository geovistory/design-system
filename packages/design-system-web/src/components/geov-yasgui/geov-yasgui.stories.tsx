import { h } from '@stencil/core';
import { docsTemlpate } from '../../../.storybook/templates/docsTemplate';
import { stencilWrapper } from '../../../.storybook/lib/stencilWrapper';
import componentApi from './docs-component-api.md?raw';
import overview from './docs-overview.md?raw';
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

export const Default = await stencilWrapper(<geov-yasgui></geov-yasgui>);
export const WithMapPlugin = await stencilWrapper(<geov-yasgui plugins={new Set(['map'])}></geov-yasgui>);
export const WithoutPlugin = await stencilWrapper(<geov-yasgui></geov-yasgui>);

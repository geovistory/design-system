import { h } from '@stencil/core';
import { docsTemlpate } from '../../../.storybook/templates/docsTemplate';
import { stencilWrapper } from '../../../.storybook/lib/stencilWrapper';
import componentApi from './docs-component-api.md?raw';
import overview from './docs-overview.md?raw';

export default {
  title: 'Data Visualization Components/Class Distribution',
  tags: ['autodocs'],
  parameters: {
    viewMode: 'docs',
    docs: {
      page: () => docsTemlpate(overview, componentApi),
    },
  },
};

export const ClassDistribution = stencilWrapper(
  <geov-class-distri sparqlEndpoint="https://sparql.geovistory.org/api_v1_community_data" width={500} height={500}></geov-class-distri>,
);

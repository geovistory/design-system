import { h } from '@stencil/core';
import { stencilWrapper } from '../../../.storybook/lib/stencilWrapper';
import { docsTemlpate } from '../../../.storybook/templates/docsTemplate';
import componentApi from './docs-component-api.md?raw';
import overview from './docs-overview.md?raw';
export default {
  title: 'Data Visualization Components/Map Circles/Popup',
  tags: ['autodocs'],
  parameters: {
    viewMode: 'docs',
    docs: {
      page: () => docsTemlpate(overview, componentApi),
    },
  },
};

export const Default = await stencilWrapper(
  <geov-map-circles-popup
    items={[
      { label: 'Label 1', items: [{ label: 'Child 1.1' }, { label: 'Child 1.2' }] },
      {
        label: 'Label 2',
        suffix: '2',
        url: 'http://foo.2.bar',
        items: [
          { label: 'Child 2.1', url: 'http://foo.2.1.bar' },
          { label: 'Child 2.2', url: 'http://foo.2.2.bar' },
          { label: 'Child 2.2', url: 'http://foo.2.2.bar' },
          { label: 'Child 2.2', url: 'http://foo.2.2.bar' },
          { label: 'Child 2.2', url: 'http://foo.2.2.bar' },
        ],
      },
    ]}
  ></geov-map-circles-popup>,
);

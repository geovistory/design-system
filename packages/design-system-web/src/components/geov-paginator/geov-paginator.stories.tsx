import { h } from '@stencil/core';
import { docsTemlpate } from '../../../.storybook/templates/docsTemplate';
import { stencilWrapper } from '../../../.storybook/lib/stencilWrapper';
import componentApi from './docs-component-api.md?raw';
import overview from './docs-overview.md?raw';
export default {
  title: 'Design Components/Paginator',
    tags: ['autodocs'],
  parameters: {
    viewMode: 'docs',
    docs: {
      page: () => docsTemlpate(overview, componentApi),
    },
  },
};

export const Paginator = stencilWrapper(
  <geov-paginator
    length={60}
    onPageChanged={e => {
      console.log(e.detail);
    }}
  ></geov-paginator>,
);

export const PaginatorColor = stencilWrapper(
  <geov-paginator
    length={60}
    color="tertiary"
    onPageChanged={e => {
      console.log(e.detail);
    }}
  ></geov-paginator>,
);

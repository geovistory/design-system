import { h } from '@stencil/core';
import { stencilWrapper } from '../../../.storybook/lib/stencilWrapper';
import { docsTemlpate } from '../../../.storybook/templates/docsTemplate';
import componentApi from './docs-component-api.md?raw';
import overview from './docs-overview.md?raw';
export default {
  title: 'Data Components/Entity/Display String Literal',
  tags: ['autodocs'],
  parameters: {
    viewMode: 'docs',
    docs: {
      page: () => docsTemlpate(overview, componentApi),
    },
  },
};

export const XsdString = await stencilWrapper(
  <geov-display-string-literal modalTitle="My predicate" label="This is a long long long long long label"></geov-display-string-literal>,
);

export const LangString = await stencilWrapper(
  <geov-display-string-literal modalTitle="My predicate" label="This is a long long long long long label" language="fr"></geov-display-string-literal>,
);

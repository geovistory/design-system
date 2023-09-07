import { h } from '@stencil/core';
import { stencilWrapper } from '../../../.storybook/lib/stencilWrapper';
import { docsTemlpate } from '../../../.storybook/templates/docsTemplate';
import componentApi from './docs-component-api.md?raw';
import overview from './docs-overview.md?raw';
export default {
  title: 'Data Components/Mermaid',
  tags: ['autodocs'],
  parameters: {
    viewMode: 'docs',
    docs: {
      page: () => docsTemlpate(overview, componentApi),
    },
  },
};

export const Mermaid = await stencilWrapper(
  <geov-mermaid>{`
  mindmap
    root((Hello World))
      geography
      history
      Data
        Linked
        Open
        Fair
      Research
        Analysis
        Publication
      Tools
        Toolbox
        Sparklis
`}</geov-mermaid>,
);

export const Pie = await stencilWrapper(
  <geov-mermaid>{`
  pie title Pets adopted by volunteers
  "Dogs" : 386
  "Cats" : 85
  "Rats" : 15
`}</geov-mermaid>,
);

/**
 * If you provide wrong input, the component renders an error.
 */
export const WrongInput = await stencilWrapper(
  <geov-mermaid>{`
  -> no chart <-
`}</geov-mermaid>,
);

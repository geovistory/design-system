import { h } from '@stencil/core';
import { DEFAULT_SPARQL_ENDPOINT } from '../../../.storybook/config/defaulSparqlEndpoint';
import { docsTemlpate } from '../../../.storybook/templates/docsTemplate';
import { stencilWrapper } from '../../../.storybook/lib/stencilWrapper';
import componentApi from './docs-component-api.md?raw';
import overview from './docs-overview.md?raw';
export default {
  title: 'Data Components/Explorer/Explorer',
  tags: ['autodocs'],
  parameters: {
    viewMode: 'docs',
    docs: {
      page: () => docsTemlpate(overview, componentApi),
    },
  },
};

export const Explorer = stencilWrapper(<geov-explorer sparqlEndpoint={DEFAULT_SPARQL_ENDPOINT} preferredItems={['c21', 'c523']}></geov-explorer>);

export const ExplorerInitSearch = stencilWrapper(
  <geov-explorer sparqlEndpoint={DEFAULT_SPARQL_ENDPOINT} preferredItems={['c21', 'c523']} initSearchString="Anna Maria"></geov-explorer>,
);

export const ExplorerProject84760 = stencilWrapper(
  <geov-explorer
    sparqlEndpoint="https://sparql.geovistory.org/api_v1_project_84760"
    preferredItems={['c21', 'c523']}
    initSearchString="Jakarta"
    uriRegex="(http://geovistory.org/resource/)(.*)"
    uriReplace="http://geovistory.org/resource/$2?p=84760"
  ></geov-explorer>,
);

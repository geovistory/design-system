import { h } from '@stencil/core';
import { DEFAULT_SPARQL_ENDPOINT } from '../../../.storybook/config/defaulSparqlEndpoint';
import { docsTemlpate } from '../../../.storybook/templates/docsTemplate';
import { stencilWrapper } from '../../helpers/stencilWrapper';
import componentApi from './docs-component-api.md?raw';
import overview from './docs-overview.md?raw';
export default {
  title: 'Data Components/DataFetchExample',
    tags: ['autodocs'],
  parameters: {
    viewMode: 'docs',
    docs: {
      page: () => docsTemlpate(overview, componentApi),
    },
  },
};

export const DataFetchExample = stencilWrapper(<geov-data-fetch-example sparqlEndpoint={DEFAULT_SPARQL_ENDPOINT} entityId="i315800"></geov-data-fetch-example>);

export const DataFetchExamplePreloaded = stencilWrapper(
  <geov-data-fetch-example sparqlEndpoint={DEFAULT_SPARQL_ENDPOINT} entityId="i315800" _ssrId="data-fetch-examle-1"></geov-data-fetch-example>,
);

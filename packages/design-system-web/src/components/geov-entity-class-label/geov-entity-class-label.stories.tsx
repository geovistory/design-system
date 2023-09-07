import { h } from '@stencil/core';
import { DEFAULT_SPARQL_ENDPOINT } from '../../../.storybook/config/defaulSparqlEndpoint';
import { docsTemlpate } from '../../../.storybook/templates/docsTemplate';
import { stencilWrapper } from '../../../.storybook/lib/stencilWrapper';
import componentApi from './docs-component-api.md?raw';
import overview from './docs-overview.md?raw';
export default {
  title: 'Data Components/Entity/EntityClassLabel',
  tags: ['autodocs'],
  parameters: {
    viewMode: 'docs',
    docs: {
      page: () => docsTemlpate(overview, componentApi),
    },
  },
};
export const EntityClassLabel = await stencilWrapper(<geov-entity-class-label entityId="i315803" sparqlEndpoint={DEFAULT_SPARQL_ENDPOINT}></geov-entity-class-label>);

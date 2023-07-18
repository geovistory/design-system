import { h } from '@stencil/core';
import { DEFAULT_SPARQL_ENDPOINT } from '../../../.storybook/config/defaulSparqlEndpoint';
import { docsTemlpate } from '../../../.storybook/templates/docsTemplate';
import { stencilWrapper } from '../../../.storybook/lib/stencilWrapper';
import componentApi from './docs-component-api.md?raw';
import overview from './docs-overview.md?raw';
export default {
  title: 'Data Components/Entity/EntityDefinition',
  tags: ['autodocs'],
  parameters: {
    viewMode: 'docs',
    docs: {
      page: () => docsTemlpate(overview, componentApi),
    },
  },
};
export const EntityDefinition = stencilWrapper(<geov-entity-definition entityId="i3158616" sparqlEndpoint={DEFAULT_SPARQL_ENDPOINT}></geov-entity-definition>);
export const EntityDefinitionNotFound = stencilWrapper(
  <geov-entity-definition entityId="xyz" sparqlEndpoint={DEFAULT_SPARQL_ENDPOINT} emptyPlaceholder="No definition found"></geov-entity-definition>,
);

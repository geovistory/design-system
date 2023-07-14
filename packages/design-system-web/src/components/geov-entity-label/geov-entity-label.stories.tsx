import { h } from '@stencil/core';
import { DEFAULT_SPARQL_ENDPOINT } from '../../../.storybook/config/defaulSparqlEndpoint';
import { docsTemlpate } from '../../../.storybook/templates/docsTemplate';
import { stencilWrapper } from '../../../.storybook/lib/stencilWrapper';
import componentApi from './docs-component-api.md?raw';
import overview from './docs-overview.md?raw';
export default {
  title: 'Data Components/Entity/Entity Label',
    tags: ['autodocs'],
  parameters: {
    viewMode: 'docs',
    docs: {
      page: () => docsTemlpate(overview, componentApi),
    },
  },
};

export const EntityLabel = stencilWrapper(<geov-entity-label sparqlEndpoint={DEFAULT_SPARQL_ENDPOINT} entityId="i315800"></geov-entity-label>);
export const EntityLabelDataGiven = stencilWrapper(<geov-entity-label sparqlEndpoint={DEFAULT_SPARQL_ENDPOINT} entityId="i315800" _ssrId="8wrr2f"></geov-entity-label>);

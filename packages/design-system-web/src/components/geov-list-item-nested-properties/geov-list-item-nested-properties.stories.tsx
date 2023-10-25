import { h } from '@stencil/core';
import { DEFAULT_SPARQL_ENDPOINT } from '../../../.storybook/config/defaulSparqlEndpoint';
import { docsTemlpate } from '../../../.storybook/templates/docsTemplate';
import { stencilWrapper } from '../../../.storybook/lib/stencilWrapper';
import componentApi from './docs-component-api.md?raw';
import overview from './docs-overview.md?raw';
export default {
  title: 'Data Components/Entity/List Item Nested Properties',
  tags: ['autodocs'],
  parameters: {
    viewMode: 'docs',
    docs: {
      page: () => docsTemlpate(overview, componentApi),
    },
  },
};

export const EntityNestedPropertiesDeath = await stencilWrapper(
  <geov-list-item-nested-properties sparqlEndpoint={DEFAULT_SPARQL_ENDPOINT} entityUri="i1772506" language="en" fetchBeforeRender={false}></geov-list-item-nested-properties>,
);

export const EntityNestedPropertiesBorn = await stencilWrapper(
  <geov-list-item-nested-properties sparqlEndpoint={DEFAULT_SPARQL_ENDPOINT} entityUri="i1772506" language="en" fetchBeforeRender={false}></geov-list-item-nested-properties>,
);

export const EntityNestedProperties = await stencilWrapper(
  <geov-list-item-nested-properties sparqlEndpoint={DEFAULT_SPARQL_ENDPOINT} entityUri="i1772506" language="en" fetchBeforeRender={false}></geov-list-item-nested-properties>,
);

export const EntityNestedPropertiesTest = await stencilWrapper(
  <geov-list-item-nested-properties sparqlEndpoint={DEFAULT_SPARQL_ENDPOINT} entityUri="i152185" language="en" fetchBeforeRender={false}></geov-list-item-nested-properties>,
);

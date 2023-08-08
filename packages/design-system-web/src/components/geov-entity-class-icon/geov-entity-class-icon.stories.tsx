import { h } from '@stencil/core';
import { DEFAULT_SPARQL_ENDPOINT } from '../../../.storybook/config/defaulSparqlEndpoint';
import { docsTemlpate } from '../../../.storybook/templates/docsTemplate';
import { stencilWrapper } from '../../../.storybook/lib/stencilWrapper';
import componentApi from './docs-component-api.md?raw';
import overview from './docs-overview.md?raw';
export default {
  title: 'Data Components/Entity/EntityClassIcon',
  tags: ['autodocs'],
  parameters: {
    viewMode: 'docs',
    docs: {
      page: () => docsTemlpate(overview, componentApi),
    },
  },
};
export const EntityClassIcon = stencilWrapper(<geov-entity-class-icon entityId="i785518" sparqlEndpoint={DEFAULT_SPARQL_ENDPOINT}></geov-entity-class-icon>);
export const EntityClassIconGeographicalPlace = stencilWrapper(<geov-entity-class-icon entityId="i207953" sparqlEndpoint={DEFAULT_SPARQL_ENDPOINT}></geov-entity-class-icon>);
export const EntityClassIconGroup = stencilWrapper(<geov-entity-class-icon entityId="i2215290" sparqlEndpoint={DEFAULT_SPARQL_ENDPOINT}></geov-entity-class-icon>);
export const EntityClassIconShipVoyage = stencilWrapper(<geov-entity-class-icon entityId="i149888" sparqlEndpoint={DEFAULT_SPARQL_ENDPOINT}></geov-entity-class-icon>);
export const EntityClassIconDateTimeDescription = stencilWrapper(<geov-entity-class-icon entityId="i609119" sparqlEndpoint={DEFAULT_SPARQL_ENDPOINT}></geov-entity-class-icon>);

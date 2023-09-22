import { h } from '@stencil/core';
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
export const EntityClassIconPerson = await stencilWrapper(<geov-entity-class-icon classURI="https://ontome.net/ontology/c21"></geov-entity-class-icon>);
export const EntityClassIconGeographicalPlace = await stencilWrapper(<geov-entity-class-icon classURI="https://ontome.net/ontology/c363"></geov-entity-class-icon>);
export const EntityClassIconGroup = await stencilWrapper(<geov-entity-class-icon classURI="https://ontome.net/ontology/c68"></geov-entity-class-icon>);
export const EntityClassIconShipVoyage = await stencilWrapper(<geov-entity-class-icon classURI="https://ontome.net/ontology/c523"></geov-entity-class-icon>);
export const EntityClassIconDateTimeDescription = await stencilWrapper(
  <geov-entity-class-icon classURI="http://www.w3.org/2006/time#DateTimeDescription"></geov-entity-class-icon>,
);
export const EntityClassIconText = await stencilWrapper(<geov-entity-class-icon classURI="https://ontome.net/ontology/c785"></geov-entity-class-icon>);

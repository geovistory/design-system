// geov-hello-world.stories.tsx

import React from 'react';
import { JSX } from '../..';
import { GeovEntity } from '../../../.storybook/stencil-generated/component';
import { DEFAULT_SPARQL_ENDPOINT } from '../../../.storybook/config/defaulSparqlEndpoint';

export default {
  title: 'Data Components/Entity/Entity',
  component: GeovEntity,
};
const Template = (args: JSX.GeovEntity) => <GeovEntity {...args}></GeovEntity>;

export const EntityShipVoyage = Template.bind({});
const args: JSX.GeovEntity = {
  sparqlEndpoint: DEFAULT_SPARQL_ENDPOINT,
  entityId: 'i151089',
  language: 'en',
  fetchBeforeRender: false,
};
EntityShipVoyage.args = args;

export const EntityGeographicalPlace = Template.bind({});
const args2: JSX.GeovEntity = {
  sparqlEndpoint: DEFAULT_SPARQL_ENDPOINT,
  entityId: 'i209502',
  language: 'en',
  fetchBeforeRender: false,
};
EntityGeographicalPlace.args = args2;

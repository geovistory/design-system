// geov-hello-world.stories.tsx

import React from 'react';
import { JSX } from '../..';
import { GeovEntityProperties } from '../../../.storybook/stencil-generated/component';
import { DEFAULT_SPARQL_ENDPOINT } from '../../../.storybook/config/defaulSparqlEndpoint';

export default {
  title: 'Data Components/Entity/Entity Properties',
  component: GeovEntityProperties,
};
const Template = (args: JSX.GeovEntityProperties) => <GeovEntityProperties {...args}></GeovEntityProperties>;

export const EntityPropertiesTeEn = Template.bind({});
const args: JSX.GeovEntityProperties = {
  sparqlEndpoint: DEFAULT_SPARQL_ENDPOINT,
  entityId: 'i151089',
  language: 'en',
  fetchBeforeRender: true,
};
EntityPropertiesTeEn.args = args;

export const EntityPropertiesRammekensToJakarta = Template.bind({});
const args1: JSX.GeovEntityProperties = {
  sparqlEndpoint: DEFAULT_SPARQL_ENDPOINT,
  entityId: 'i152157',
  language: 'en',
  fetchBeforeRender: true,
};
EntityPropertiesRammekensToJakarta.args = args1;
export const EntityPropertiesPeIt = Template.bind({});
const args2: JSX.GeovEntityProperties = {
  sparqlEndpoint: DEFAULT_SPARQL_ENDPOINT,
  entityId: 'i209502',
  language: 'en',
  fetchBeforeRender: true,
};
EntityPropertiesPeIt.args = args2;

export const EntityPropertiesPresence = Template.bind({});
const args3: JSX.GeovEntityProperties = {
  sparqlEndpoint: DEFAULT_SPARQL_ENDPOINT,
  entityId: 'i253594',
  language: 'en',
  fetchBeforeRender: true,
};
EntityPropertiesPresence.args = args3;

export const EntityPropertiesTimeSpan = Template.bind({});
const args4: JSX.GeovEntityProperties = {
  sparqlEndpoint: DEFAULT_SPARQL_ENDPOINT,
  entityId: 'i151089ts',
  language: 'en',
  fetchBeforeRender: true,
};
EntityPropertiesTimeSpan.args = args4;

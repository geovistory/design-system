// geov-hello-world.stories.tsx

import React from 'react';
import { JSX } from '../..';
import { GeovEntityProperties } from '../../../.storybook/stencil-generated/component';
import { DEFAULT_SPARQL_ENDPOINT } from '../../../.storybook/config/defaulSparqlEndpoint';

export default {
  title: 'Data Components/Entity/EntityProperties',
  component: GeovEntityProperties,
};
const Template = (args: JSX.GeovEntityProperties) => <GeovEntityProperties {...args}></GeovEntityProperties>;

export const EntityProperties = Template.bind({});
const args: JSX.GeovEntityProperties = {
  sparqlEndpoint: DEFAULT_SPARQL_ENDPOINT,
  entityId: 'i151089',
  language: 'en',
  fetchBeforeRender: true,
};
EntityProperties.args = args;

export const EntityProperties2 = Template.bind({});
const args2: JSX.GeovEntityProperties = {
  sparqlEndpoint: DEFAULT_SPARQL_ENDPOINT,
  entityId: 'i209502',
  language: 'en',
  fetchBeforeRender: true,
};
EntityProperties2.args = args2;

export const EntityProperties3 = Template.bind({});
const args3: JSX.GeovEntityProperties = {
  sparqlEndpoint: DEFAULT_SPARQL_ENDPOINT,
  entityId: 'i253594',
  language: 'en',
  fetchBeforeRender: true,
};
EntityProperties3.args = args3;

export const EntityProperties4 = Template.bind({});
const args4: JSX.GeovEntityProperties = {
  sparqlEndpoint: DEFAULT_SPARQL_ENDPOINT,
  entityId: 'i151089ts',
  language: 'en',
  fetchBeforeRender: true,
};
EntityProperties4.args = args4;
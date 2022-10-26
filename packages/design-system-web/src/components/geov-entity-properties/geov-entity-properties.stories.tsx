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
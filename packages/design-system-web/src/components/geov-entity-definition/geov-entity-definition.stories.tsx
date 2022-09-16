import React from 'react';
import { JSX } from '../..';
import { GeovEntityDefinition } from '../../../.storybook/stencil-generated/component';
import { DEFAULT_SPARQL_ENDPOINT } from '../../../.storybook/config/defaulSparqlEndpoint';

export default {
  title: 'Entity Components/EntityDefinition',
  component: GeovEntityDefinition,
};
const Template = (args: JSX.GeovEntityDefinition) => <GeovEntityDefinition {...args}></GeovEntityDefinition>;

export const EntityDefinition = Template.bind({});
const args: JSX.GeovEntityDefinition = {
  entityId: 'i3158616',
  sparqlEndpoint: DEFAULT_SPARQL_ENDPOINT,
};
EntityDefinition.args = args;

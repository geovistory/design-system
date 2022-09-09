import React from 'react';
import { JSX } from '../..';
import { GeovEntityClassLabel } from '../../../.storybook/stencil-generated/component';
import { DEFAULT_SPARQL_ENDPOINT } from '../../../.storybook/config/defaulSparqlEndpoint';

export default {
  title: 'Basic Components/EntityClassLabel',
  component: GeovEntityClassLabel,
};
const Template = (args: JSX.GeovEntityClassLabel) => <GeovEntityClassLabel {...args}></GeovEntityClassLabel>;

export const EntityClassLabel = Template.bind({});
const args: JSX.GeovEntityClassLabel = {
  entityId:"i315803",
  sparqlEndpoint: DEFAULT_SPARQL_ENDPOINT
};
EntityClassLabel.args = args;

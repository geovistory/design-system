import React from 'react';
import { JSX } from '../..';
import { DEFAULT_SPARQL_ENDPOINT } from '../../../.storybook/config/defaulSparqlEndpoint';
import { GeovDisplayTimeDatetimedescription } from '../../../.storybook/stencil-generated/component';

export default {
  title: 'Data Components/Entity/Display Time:Datetimedescription',
  component: GeovDisplayTimeDatetimedescription,
};
const Template = (args: JSX.GeovDisplayTimeDatetimedescription) => <GeovDisplayTimeDatetimedescription {...args}></GeovDisplayTimeDatetimedescription>;

export const DisplayTimeDatetimedescription = Template.bind({});
const args: JSX.GeovDisplayTimeDatetimedescription = {
  sparqlEndpoint: DEFAULT_SPARQL_ENDPOINT,
  entityId: 'i271905',
};
DisplayTimeDatetimedescription.args = args;

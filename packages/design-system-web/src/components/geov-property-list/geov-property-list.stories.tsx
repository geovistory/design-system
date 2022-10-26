// geov-hello-world.stories.tsx

import React from 'react';
import { JSX } from '../..';
import { GeovPropertyList } from '../../../.storybook/stencil-generated/component';
import { DEFAULT_SPARQL_ENDPOINT } from '../../../.storybook/config/defaulSparqlEndpoint';

export default {
  title: 'Data Components/Entity/EntityProperties/PropertyList',
  component: GeovPropertyList,
};
const Template = (args: JSX.GeovPropertyList) => <GeovPropertyList {...args}></GeovPropertyList>;

export const PropertyList = Template.bind({});
const args: JSX.GeovPropertyList = {
  sparqlEndpoint: DEFAULT_SPARQL_ENDPOINT,
  entityId: 'i151089',
  language: 'en'
};
PropertyList.args = args;
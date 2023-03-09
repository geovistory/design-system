// geov-hello-world.stories.tsx

import React from 'react';
import { JSX } from '../..';
import { GeovPropertyDistri } from '../../../.storybook/stencil-generated/component';

export default {
  title: 'Data Visualization Components/Property Distribution',
  component: GeovPropertyDistri,
};
const Template = (args: JSX.GeovPropertyDistri) => <GeovPropertyDistri {...args}></GeovPropertyDistri>;

export const PropertyDistribution = Template.bind({});
const args: JSX.GeovPropertyDistri = {
  sparqlEndpoint: 'https://sparql.geovistory.org/api_v1_community_data',
  width: 500,
  height: 500,
};
PropertyDistribution.args = args;
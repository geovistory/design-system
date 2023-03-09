// geov-hello-world.stories.tsx

import React from 'react';
import { JSX } from '../..';
import { GeovClassDistri } from '../../../.storybook/stencil-generated/component';

export default {
  title: 'Data Visualization Components/Class Distribution',
  component: GeovClassDistri,
};
const Template = (args: JSX.GeovClassDistri) => <GeovClassDistri {...args}></GeovClassDistri>;

export const ClassDistribution = Template.bind({});
const args: JSX.GeovClassDistri = {
  sparqlEndpoint: 'https://sparql.geovistory.org/api_v1_community_data',
  width: 500,
  height: 500
};
ClassDistribution.args = args;
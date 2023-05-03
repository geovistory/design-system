import React from 'react';
import { JSX } from '../..';
import { GeovGraph } from '../../../.storybook/stencil-generated/component';

export default {
  title: 'Entity Graph',
  component: GeovGraph,
};
const Template = (args: JSX.GeovGraph) => <GeovGraph {...args}></GeovGraph>;

export const EntityGraph = Template.bind({});
const args: JSX.GeovGraph = {
  sparqlEndpoint: 'https://sparql.geovistory.org/api_v1_community_data',
  width: 500,
  height: 500,
  pkEntity: 'i80974'
};
EntityGraph.args = args;
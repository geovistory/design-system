import React from 'react';
import { JSX } from '../..';
import { DEFAULT_SPARQL_ENDPOINT } from '../../../.storybook/config/defaulSparqlEndpoint';
import { GeovExplorer } from '../../../.storybook/stencil-generated/component';

export default {
  title: 'Data Components/Explorer/Explorer',
  component: GeovExplorer,
};
const Template = (args: JSX.GeovExplorer) => <GeovExplorer {...args}></GeovExplorer>;

export const Explorer = Template.bind({});
const args1: JSX.GeovExplorer = {
  sparqlEndpoint: DEFAULT_SPARQL_ENDPOINT,
};
Explorer.args = args1;

export const ExplorerInitSearch = Template.bind({});

const args2: JSX.GeovExplorer = {
  sparqlEndpoint: DEFAULT_SPARQL_ENDPOINT,
  initSearchString: 'Anna Maria',
};
ExplorerInitSearch.args = args2;

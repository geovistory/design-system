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

export const ExplorerProject84760 = Template.bind({});

const args3: JSX.GeovExplorer = {
  sparqlEndpoint: 'https://sparql.geovistory.org/api_v1_project_84760',
  initSearchString: 'Jakarta',
  uriRegex: '(http://geovistory.org/resource/)(.*)',
  uriReplace: 'http://geovistory.org/resource/$2?p=84760',
};
ExplorerProject84760.args = args3;

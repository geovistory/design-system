import React from 'react';
import { JSX } from '../..';
import { DEFAULT_SPARQL_ENDPOINT } from '../../../.storybook/config/defaulSparqlEndpoint';
import { GeovIf } from '../../../.storybook/stencil-generated/component';

export default {
  title: 'Data Components/Helpers/If',
  component: GeovIf,
};
const Template = (args: JSX.GeovIf) => (
  <div>
    If you see a next line, if the condition of the sparqlQuery is met: <br />
    <GeovIf {...args}>You see this line, because condition is met</GeovIf>
  </div>
);

export const IfTrue = Template.bind({});
const query1 = `SELECT  ((1=1) as ?condition) WHERE {}`;
const args1: JSX.GeovIf = {
  sparqlEndpoint: DEFAULT_SPARQL_ENDPOINT,
  sparqlQuery: query1,
};
IfTrue.args = args1;

export const IfFalse = Template.bind({});
const query2 = `SELECT  ((0=1) as ?condition) WHERE {}`;
const args2: JSX.GeovIf = {
  sparqlEndpoint: DEFAULT_SPARQL_ENDPOINT,
  sparqlQuery: query2,
};
IfTrue.args = args2;

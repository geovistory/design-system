import React from 'react';
import { JSX } from '../..';
import { DEFAULT_SPARQL_ENDPOINT } from '../../../.storybook/config/defaulSparqlEndpoint';
import { GeovIfEntityIsAnnotated } from '../../../.storybook/stencil-generated/component';

export default {
  title: 'Data Components/Helpers/IfEntityIsAnnotated',
  component: GeovIfEntityIsAnnotated,
};
const Template = (args: JSX.GeovIfEntityIsAnnotated) => (
  <div>
    If you see a next line, if the entity has at least one annotation in text: <br />
    <GeovIfEntityIsAnnotated {...args}>The entity has an annotation!</GeovIfEntityIsAnnotated>
  </div>
);

export const IfEntityIsAnnotatedTrue = Template.bind({});
const args1: JSX.GeovIfEntityIsAnnotated = {
  sparqlEndpoint: 'https://sparql.geovistory.org/api_v1_project_924033',
  entityId: 'i836507',
};
IfEntityIsAnnotatedTrue.args = args1;

export const IfEntityIsAnnotatedFalse = Template.bind({});
const args2: JSX.GeovIfEntityIsAnnotated = {
  sparqlEndpoint: 'https://sparql.geovistory.org/api_v1_project_924033',
  entityId: 'i930175',
};
IfEntityIsAnnotatedFalse.args = args2;

import React from 'react';
import { JSX } from '../..';
import { DEFAULT_SPARQL_ENDPOINT } from '../../../.storybook/config/defaulSparqlEndpoint';
import { GeovEntityPropsByPredicate } from '../../../.storybook/stencil-generated/component';

export default {
  title: 'Data Components/Entity/Entity Props By Predicate',
  component: GeovEntityPropsByPredicate,
};
const Template = (args: JSX.GeovEntityPropsByPredicate) => <GeovEntityPropsByPredicate {...args}></GeovEntityPropsByPredicate>;

export const EntityPropsByPredicate = Template.bind({});
const args: JSX.GeovEntityPropsByPredicate = {
  sparqlEndpoint: DEFAULT_SPARQL_ENDPOINT,
  entityId: 'i151089',
  isOutgoing: true,
  totalCount: 1,
  language: 'en',
  predicateUri: 'https://ontome.net/ontology/p1359',
  predicateLabel: 'participated in',
};
EntityPropsByPredicate.args = args;

export const EntityPropsByPredicateWithPaginate = Template.bind({});
const args2: JSX.GeovEntityPropsByPredicate = {
  sparqlEndpoint: DEFAULT_SPARQL_ENDPOINT,
  entityId: 'i209502',
  isOutgoing: false,
  totalCount: 2980,
  language: 'en',
  predicateUri: 'https://ontome.net/ontology/p1335',
  predicateLabel: 'had departure place',
};
EntityPropsByPredicateWithPaginate.args = args2;

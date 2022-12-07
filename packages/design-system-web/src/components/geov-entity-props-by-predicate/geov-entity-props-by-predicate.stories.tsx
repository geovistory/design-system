import React from 'react';
import { JSX } from '../..';
import { DEFAULT_SPARQL_ENDPOINT } from '../../../.storybook/config/defaulSparqlEndpoint';
import { GeovEntityPropsByPredicate } from '../../../.storybook/stencil-generated/component';

export default {
  title: 'Data Components/Entity/Entity Props By Predicate',
  component: GeovEntityPropsByPredicate,
};
const Template = (args: JSX.GeovEntityPropsByPredicate) => <GeovEntityPropsByPredicate {...args}></GeovEntityPropsByPredicate>;

export const EntityPropsWithPerson = Template.bind({});
const args: JSX.GeovEntityPropsByPredicate = {
  sparqlEndpoint: DEFAULT_SPARQL_ENDPOINT,
  entityId: 'i151089',
  totalCount: 1,
  language: 'en',
  predicateUri: 'https://ontome.net/ontology/p1359',
  predicateLabel: 'participated in',
  fetchBeforeRender: false,
};
EntityPropsWithPerson.args = args;

export const EntityPropsWithUriRegex = Template.bind({});
const args1: JSX.GeovEntityPropsByPredicate = {
  sparqlEndpoint: DEFAULT_SPARQL_ENDPOINT,
  entityId: 'i151089',
  totalCount: 1,
  language: 'en',
  predicateUri: 'https://ontome.net/ontology/p1359',
  predicateLabel: 'participated in',
  uriRegex: '(http://geovistory.org/resource/)(.*)',
  uriReplace: 'http://dev.geovistory.org/resource/$2?p=123',
  fetchBeforeRender: false,
};
EntityPropsWithUriRegex.args = args1;

export const EntityPropsWithPaginatedShipVoyages = Template.bind({});
const args2: JSX.GeovEntityPropsByPredicate = {
  sparqlEndpoint: DEFAULT_SPARQL_ENDPOINT,
  entityId: 'i209502',
  totalCount: 2980,
  language: 'en',
  predicateUri: 'https://ontome.net/ontology/p1335',
  predicateLabel: 'had departure place',
  fetchBeforeRender: false,
};
EntityPropsWithPaginatedShipVoyages.args = args2;

export const EntityPropsWithDateTimeDescription = Template.bind({});
const args3: JSX.GeovEntityPropsByPredicate = {
  sparqlEndpoint: DEFAULT_SPARQL_ENDPOINT,
  entityId: 'i151089ts',
  totalCount: 1,
  language: 'en',
  predicateUri: 'https://ontome.net/ontology/p150',
  predicateLabel: 'end of the begin',
  fetchBeforeRender: false,
};
EntityPropsWithDateTimeDescription.args = args3;

export const EntityPropsWithXsdString = Template.bind({});
const args4: JSX.GeovEntityPropsByPredicate = {
  sparqlEndpoint: DEFAULT_SPARQL_ENDPOINT,
  entityId: 'i215634',
  totalCount: 1,
  language: 'en',
  predicateUri: 'https://ontome.net/ontology/p1113',
  predicateLabel: 'refers to name',
  fetchBeforeRender: false,
};
EntityPropsWithXsdString.args = args4;
EntityPropsWithDateTimeDescription.args = args3;

export const EntityPropsWithLangString = Template.bind({});
const args5: JSX.GeovEntityPropsByPredicate = {
  sparqlEndpoint: DEFAULT_SPARQL_ENDPOINT,
  entityId: 'i2345931',
  totalCount: 1,
  language: 'en',
  predicateUri: 'https://ontome.net/ontology/p1761',
  predicateLabel: 'has short title',
  fetchBeforeRender: false,
};
EntityPropsWithLangString.args = args5;

export const EntityPropsWithXsdStringPreloaded = Template.bind({});
const args6: JSX.GeovEntityPropsByPredicate = {
  sparqlEndpoint: DEFAULT_SPARQL_ENDPOINT,
  entityId: 'i215635',
  totalCount: 1,
  language: 'en',
  predicateUri: 'https://ontome.net/ontology/p1113',
  predicateLabel: 'refers to name',
  fetchBeforeRender: true,
  _ssrId: 'data-entity-props-by-predicate-1',
};
EntityPropsWithXsdStringPreloaded.args = args6;

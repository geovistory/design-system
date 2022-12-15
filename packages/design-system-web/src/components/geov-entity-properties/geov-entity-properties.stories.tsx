// geov-hello-world.stories.tsx

import React from 'react';
import { JSX } from '../..';
import { GeovEntityProperties } from '../../../.storybook/stencil-generated/component';
import { DEFAULT_SPARQL_ENDPOINT } from '../../../.storybook/config/defaulSparqlEndpoint';

export default {
  title: 'Data Components/Entity/Entity Properties',
  component: GeovEntityProperties,
};
const Template = (args: JSX.GeovEntityProperties) => <GeovEntityProperties {...args}></GeovEntityProperties>;

export const EntityPropertiesTeEn = Template.bind({});
const args: JSX.GeovEntityProperties = {
  sparqlEndpoint: DEFAULT_SPARQL_ENDPOINT,
  entityId: 'i151089',
  language: 'en',
  fetchBeforeRender: false,
};
EntityPropertiesTeEn.args = args;

export const EntityPropertiesRammekensToJakarta = Template.bind({});
const args1: JSX.GeovEntityProperties = {
  sparqlEndpoint: DEFAULT_SPARQL_ENDPOINT,
  entityId: 'i152157',
  language: 'en',
  fetchBeforeRender: false,
};
EntityPropertiesRammekensToJakarta.args = args1;

export const EntityPropertiesPeIt = Template.bind({});
const args2: JSX.GeovEntityProperties = {
  sparqlEndpoint: DEFAULT_SPARQL_ENDPOINT,
  entityId: 'i209502',
  language: 'en',
  fetchBeforeRender: false,
};
EntityPropertiesPeIt.args = args2;

export const EntityPropertiesPresence = Template.bind({});
const args3: JSX.GeovEntityProperties = {
  sparqlEndpoint: DEFAULT_SPARQL_ENDPOINT,
  entityId: 'i253594',
  language: 'en',
  fetchBeforeRender: false,
};
EntityPropertiesPresence.args = args3;

export const EntityPropertiesTimeSpan = Template.bind({});
const args4: JSX.GeovEntityProperties = {
  sparqlEndpoint: DEFAULT_SPARQL_ENDPOINT,
  entityId: 'i151089ts',
  language: 'en',
  fetchBeforeRender: false,
};
EntityPropertiesTimeSpan.args = args4;

export const EntityPropertiesRammekensToJakartaPreloaded = Template.bind({});
const args5: JSX.GeovEntityProperties = {
  sparqlEndpoint: DEFAULT_SPARQL_ENDPOINT,
  entityId: 'i152157',
  language: 'en',
  fetchBeforeRender: true,
  _ssrId: 'data-entity-properties-1',
};
EntityPropertiesRammekensToJakartaPreloaded.args = args5;

export const EntityPropertiesColorPrimary = Template.bind({});
const args6: JSX.GeovEntityProperties = {
  sparqlEndpoint: DEFAULT_SPARQL_ENDPOINT,
  entityId: 'i152157',
  language: 'en',
  fetchBeforeRender: true,
  _ssrId: 'data-entity-properties-1',
  color: 'tertiary',
};
EntityPropertiesColorPrimary.args = args6;

export const EntityPropertiesPredicateInclude = Template.bind({});
const args7: JSX.GeovEntityProperties = {
  sparqlEndpoint: DEFAULT_SPARQL_ENDPOINT,
  entityId: 'i86177',
  language: 'en',
  color: 'tertiary',
  fetchBeforeRender: true,
  predicateInclude: ['http://www.w3.org/2000/01/rdf-schema#label', 'https://ontome.net/ontology/p1111i'].join(','),
};
EntityPropertiesPredicateInclude.args = args7;

export const EntityPropertiesPredicateExclude = Template.bind({});
const args8: JSX.GeovEntityProperties = {
  sparqlEndpoint: DEFAULT_SPARQL_ENDPOINT,
  entityId: 'i86177',
  language: 'en',
  color: 'tertiary',
  fetchBeforeRender: true,
  predicateExclude: ['http://www.w3.org/2000/01/rdf-schema#label', 'https://ontome.net/ontology/p1111i'].join(','),
};
EntityPropertiesPredicateExclude.args = args8;

export const EntityPropertiesFixedGrid = Template.bind({});
const args9: JSX.GeovEntityProperties = {
  sparqlEndpoint: DEFAULT_SPARQL_ENDPOINT,
  entityId: 'i209502',
  language: 'en',
  fetchBeforeRender: false,
  fixedGrid: true,
};
EntityPropertiesFixedGrid.args = args9;

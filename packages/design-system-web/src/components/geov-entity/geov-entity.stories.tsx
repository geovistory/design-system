// geov-hello-world.stories.tsx

import React from 'react';
import { JSX } from '../..';
import { GeovEntity } from '../../../.storybook/stencil-generated/component';
import { AMPI_SPARQL_ENDPOINT, DEFAULT_SPARQL_ENDPOINT } from '../../../.storybook/config/defaulSparqlEndpoint';

export default {
  title: 'Data Components/Entity/Entity',
  component: GeovEntity,
};
const Template = (args: JSX.GeovEntity) => <GeovEntity {...args}></GeovEntity>;

export const ShipVoyage = Template.bind({});
const args: JSX.GeovEntity = {
  sparqlEndpoint: DEFAULT_SPARQL_ENDPOINT,
  entityId: 'i151089',
  language: 'en',
  fetchBeforeRender: false,
};
ShipVoyage.args = args;

export const GeographicalPlace = Template.bind({});
const args2: JSX.GeovEntity = {
  sparqlEndpoint: DEFAULT_SPARQL_ENDPOINT,
  entityId: 'i209502',
  language: 'en',
  fetchBeforeRender: false,
};
GeographicalPlace.args = args2;

export const JohannesKepler = Template.bind({});
const args3: JSX.GeovEntity = {
  sparqlEndpoint: DEFAULT_SPARQL_ENDPOINT,
  entityId: 'i785518',
  language: 'en',
  fetchBeforeRender: false,
};
JohannesKepler.args = args3;

export const Birth = Template.bind({});
const args4: JSX.GeovEntity = {
  sparqlEndpoint: AMPI_SPARQL_ENDPOINT,
  entityId: 'i542181',
  language: 'de',
  fetchBeforeRender: false,
};
Birth.args = args4;

export const TimeSpan = Template.bind({});
const args5: JSX.GeovEntity = {
  sparqlEndpoint: AMPI_SPARQL_ENDPOINT,
  entityId: 'i542181ts',
  language: 'de',
  fetchBeforeRender: false,
};
TimeSpan.args = args5;

export const DateTimeYear = Template.bind({});
const arg6: JSX.GeovEntity = {
  sparqlEndpoint: AMPI_SPARQL_ENDPOINT,
  entityId: 'i609119',
  language: 'de',
  fetchBeforeRender: false,
};
DateTimeYear.args = arg6;

export const DateTimeMonth = Template.bind({});
const arg7: JSX.GeovEntity = {
  sparqlEndpoint: AMPI_SPARQL_ENDPOINT,
  entityId: 'i986993',
  language: 'de',
  fetchBeforeRender: false,
};
DateTimeMonth.args = arg7;

export const DateTimeDay = Template.bind({});
const arg8: JSX.GeovEntity = {
  sparqlEndpoint: AMPI_SPARQL_ENDPOINT,
  entityId: 'i872676',
  language: 'de',
  fetchBeforeRender: false,
};
DateTimeDay.args = arg8;

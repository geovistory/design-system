import React from 'react';
import { JSX } from '../..';
import { GeovAuthorityLookup } from '../../../.storybook/stencil-generated/component';
import geovAuthorityLookupDocs from './geov-authority-lookup.docs.mdx';

export default {
  title: 'Data Components/Authority Lookup',
  component: GeovAuthorityLookup,
  argTypes: {
    apis: {
      options: ['gnd', 'idref', 'wikidata'],
      control: 'check',
    },
    types: {
      options: ['All', 'Person', 'Place', 'Group'],
      control: 'check',
    },
    nbColMax: {
      control: { type: 'range', min: 1, max: 3, step: 1 },
    },
  },
  parameters: {
    docs: {
      page: geovAuthorityLookupDocs, // Use mdx documentation
    },
  },
};

const Template = (args: JSX.GeovAuthorityLookup) => <GeovAuthorityLookup {...args}></GeovAuthorityLookup>;

export const Basic = Template.bind({});
const args: JSX.GeovAuthorityLookup = {
  initSearch: 'Johannes Kepler',
  initSearchType: 'Person',
  apis: ['gnd', 'idref', 'wikidata'],
  types: ['All', 'Person', 'Place', 'Group'],
  nbOccurencesMax: 5,
  displaySelectBtn: true,
  displayOpenBtn: true,
  displayCopyBtn: false,
  nbColMax: 3,
};

Basic.args = args;

export const OneColumn = Template.bind({});
const argsOneCol: JSX.GeovAuthorityLookup = {
  initSearch: 'Paris',
  initSearchType: 'Place',
  nbColMax: 1,
};
OneColumn.args = argsOneCol;

export const ThreeResultats = Template.bind({});
const argsThreeResultats: JSX.GeovAuthorityLookup = {
  initSearch: 'Library of Congress',
  initSearchType: 'Group',
  nbOccurencesMax: 3,
};
ThreeResultats.args = argsThreeResultats;

export const OneApi = Template.bind({});
const argsOneApi: JSX.GeovAuthorityLookup = {
  initSearch: 'Johannes Kepler',
  initSearchType: 'Person',
  apis: ['idref'],
  nbColMax: 1,
};
OneApi.args = argsOneApi;

export const AllButtons = Template.bind({});
const argsAllButtons: JSX.GeovAuthorityLookup = {
  initSearch: 'Johannes Kepler',
  initSearchType: 'Person',
  displayCopyBtn: true,
  displayOpenBtn: true,
  displaySelectBtn: true,
};
AllButtons.args = argsAllButtons;

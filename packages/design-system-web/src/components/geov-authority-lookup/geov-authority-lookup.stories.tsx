import React from 'react';
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
    viewMode: 'docs',
    docs: {
      page: geovAuthorityLookupDocs, // Use mdx documentation
    },
  },
};

export const Basic = () => (
  <GeovAuthorityLookup
    apis={['gnd', 'idref', 'wikidata']}
    types={['All', 'Person', 'Place', 'Group']}
    nbOccurencesMax={5}
    displaySelectBtn={true}
    displayOpenBtn={true}
    displayCopyBtn={false}
    nbColMax={3}
    onSelected={e => {
      console.log(e.detail.uri);
    }}
  ></GeovAuthorityLookup>
);
export const NumberOfColumns = () => <GeovAuthorityLookup nbColMax={1}></GeovAuthorityLookup>;
export const NumberOfSearchResults = () => <GeovAuthorityLookup nbOccurencesMax={3}></GeovAuthorityLookup>;
export const CustomizeSearchedApis = () => <GeovAuthorityLookup apis={['idref']} nbColMax={1}></GeovAuthorityLookup>;
export const CustomizeButtons = () => <GeovAuthorityLookup displayCopyBtn={true} displayOpenBtn={true} displaySelectBtn={true}></GeovAuthorityLookup>;
export const InitializeSearch = () => <GeovAuthorityLookup initSearch={'Johannes Kepler'} initSearchType={'Person'}></GeovAuthorityLookup>;
export const Empty = () => <GeovAuthorityLookup></GeovAuthorityLookup>;

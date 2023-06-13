import React from 'react';
import { JSX } from '../..';
import { GeovAuthorityLookupExplorer } from '../../../.storybook/stencil-generated/component';

export default {
  title: 'Data Components/Authority Lookup/Authority Lookup Explorer',
  component: GeovAuthorityLookupExplorer,
};
const Template = (args: JSX.GeovAuthorityLookupExplorer) => <GeovAuthorityLookupExplorer {...args}></GeovAuthorityLookupExplorer>;

export const AuthorityLookupExplorerGND = Template.bind({});
const argsGND: JSX.GeovAuthorityLookupExplorer = {
  api: 'gnd',
  keywords: 'Johannes Kepler',
  type: '',
  nbOccurencesMax: 5,
  displaySelectBtn: true,
  displayOpenBtn: true,
  displayCopyBtn: false,
};
AuthorityLookupExplorerGND.args = argsGND;

export const AuthorityLookupExplorerWikidata = Template.bind({});
const argsWikidata: JSX.GeovAuthorityLookupExplorer = {
  api: 'wikidata',
  keywords: 'Mozart',
  type: '',
  nbOccurencesMax: 5,
  displaySelectBtn: true,
  displayOpenBtn: true,
  displayCopyBtn: false,
};
AuthorityLookupExplorerWikidata.args = argsWikidata;

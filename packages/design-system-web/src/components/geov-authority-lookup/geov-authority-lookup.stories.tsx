import React from 'react';
import { JSX } from '../..';
import { GeovAuthorityLookup } from '../../../.storybook/stencil-generated/component';

export default {
  title: 'Data Components/Authority Lookup',
  component: GeovAuthorityLookup,
  argTypes: {
    apis: {
      options: ['idref', 'gnd', 'wikidata'],
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
};

const Template = (args: JSX.GeovAuthorityLookup) => <GeovAuthorityLookup {...args}></GeovAuthorityLookup>;

export const AuthorityLookup = Template.bind({});
const args: JSX.GeovAuthorityLookup = {
  apis: ['idref', 'gnd', 'wikidata'],
  types: ['All', 'Person', 'Place', 'Group'],
  nbOccurencesMax: 5,
  displaySelectBtn: true,
  displayOpenBtn: true,
  displayCopyBtn: false,
  nbColMax: 3,
};

AuthorityLookup.args = args;

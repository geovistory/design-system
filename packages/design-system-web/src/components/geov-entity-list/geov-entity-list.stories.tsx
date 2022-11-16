import React from 'react';
import { JSX } from '../..';
import { GeovEntityList } from '../../../.storybook/stencil-generated/component';

export default {
  title: 'Data Components/Explorer/EntityList',
  component: GeovEntityList,
};
const Template = (args: JSX.GeovEntityList) => <GeovEntityList {...args}></GeovEntityList>;

export const EntityList = Template.bind({});
const args1: JSX.GeovEntityList = {
  items: [
    { entityLabel: 'Maria Zimmermann', classLabel: 'Person', entityUri: 'http://geovistory.org/resource/i90000', classUri: 'https://ontome.net/ontology/c21' },
    { entityLabel: 'Max Zimmermann', classLabel: 'Person', entityUri: 'http://geovistory.org/resource/i90000', classUri: 'https://ontome.net/ontology/c21' },
  ],
};
EntityList.args = args1;

export const EntityListLoading = Template.bind({});

const args2: JSX.GeovEntityList = {
  loading: true,
  defaultPageSize: 10,
};
EntityListLoading.args = args2;

export const EntityListUrlReplace = Template.bind({});

const args3: JSX.GeovEntityList = {
  items: [
    { entityLabel: 'Maria Zimmermann', classLabel: 'Person', entityUri: 'http://geovistory.org/resource/i90000', classUri: 'https://ontome.net/ontology/c21' },
    { entityLabel: 'Max Zimmermann', classLabel: 'Person', entityUri: 'http://geovistory.org/resource/i90000', classUri: 'https://ontome.net/ontology/c21' },
  ],
  uriRegex: '(http://geovistory.org/resource/)(.*)',
  uriReplace: 'http://dev.geovistory.org/resource/$2?p=123',
};
EntityListUrlReplace.args = args3;

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
    { entityLabel: 'Maria Zimmermann', classLabel: 'Person', uri: 'http://geovistory.org/resource/i90000' },
    { entityLabel: 'Max Zimmermann', classLabel: 'Person', uri: 'http://geovistory.org/resource/i90000' },
  ],
};
EntityList.args = args1;

export const EntityListLoading = Template.bind({});

const args2: JSX.GeovEntityList = {
  loading: true,
  defaultPageSize: 10,
};
EntityListLoading.args = args2;

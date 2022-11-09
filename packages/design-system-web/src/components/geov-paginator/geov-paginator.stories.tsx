import React from 'react';
import { JSX } from '../..';
import { GeovPaginator } from '../../../.storybook/stencil-generated/component';

export default {
  title: 'Design Components/Paginator',
  component: GeovPaginator,
};
const Template = (args: JSX.GeovPaginator) => (
  <GeovPaginator
    {...args}
    onPageChanged={e => {
      console.log(e.detail);
    }}
  ></GeovPaginator>
);

export const Paginator = Template.bind({});
const args1: JSX.GeovPaginator = {
  length: 60,
};
Paginator.args = args1;

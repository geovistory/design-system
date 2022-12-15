import React from 'react';
import { JSX } from '../..';
import { GeovClassRadioGroup } from '../../../.storybook/stencil-generated/component';

export default {
  title: 'Data Components/Explorer/Filters/Class Radio Group',
  component: GeovClassRadioGroup,
};
const Template = (args: JSX.GeovClassRadioGroup) => (
  <GeovClassRadioGroup
    {...args}
    onSelectionChanged={e => {
      console.log(e.detail.value);
    }}
  ></GeovClassRadioGroup>
);

export const ClassSelectCheckedOnInit = Template.bind({});
const args1: JSX.GeovClassRadioGroup = {
  items: [
    {
      classLabel: 'Class 1',
      classUri: '<uri1>',
      instanceCount: 98443,
    },
    {
      classLabel: 'Class 2',
      classUri: '<uri2>',
      instanceCount: 98443,
    },
    {
      classLabel: 'Class 3',
      classUri: '<uri3>',
      instanceCount: 98443,
    },
    {
      classLabel: 'Class 4',
      classUri: '<uri4>',
      instanceCount: 98443,
    },
    {
      classLabel: 'Class 5',
      classUri: '<uri5>',
      instanceCount: 98443,
    },
    {
      classLabel: 'Class 6',
      classUri: '<uri6>',
      instanceCount: 98443,
    },
    {
      classLabel: 'Class 7',
      classUri: '<uri7>',
      instanceCount: 98443,
    },
    {
      classLabel: 'Class 8',
      classUri: '<uri8>',
      instanceCount: 98443,
    },
  ],
};
ClassSelectCheckedOnInit.args = args1;

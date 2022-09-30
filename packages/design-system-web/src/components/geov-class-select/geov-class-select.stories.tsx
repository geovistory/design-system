import React from 'react';
import { JSX } from '../..';
import { GeovClassSelect } from '../../../.storybook/stencil-generated/component';

export default {
  title: 'Data Components/Explorer/Filters/Class Select',
  component: GeovClassSelect,
};
const Template = (args: JSX.GeovClassSelect) => (
  <GeovClassSelect
    {...args}
    onSelectionChanged={e => {
      console.log(e.detail.selectedClassUris);
    }}
  ></GeovClassSelect>
);

export const ClassSelectCheckedOnInit = Template.bind({});
const args1: JSX.GeovClassSelect = {
  checkedOnInit: true,
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

export const ClassSelectUncheckedOnInit = Template.bind({});
const args2: JSX.GeovClassSelect = {
  checkedOnInit: false,
};
ClassSelectUncheckedOnInit.args = args2;

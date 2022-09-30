import React from 'react';
import { JSX } from '../..';
import { GeovClassSelectPopup } from '../../../.storybook/stencil-generated/component';

export default {
  title: 'Data Components/Explorer/Filters/Class Select Popup',
  component: GeovClassSelectPopup,
};
const Template = (args: JSX.GeovClassSelectPopup) => (
  <GeovClassSelectPopup
    {...args}
    onSelectionChanged={e => {
      console.log(e.detail.value);
    }}
  ></GeovClassSelectPopup>
);

export const ClassSelectInitVal = Template.bind({});
const args1: JSX.GeovClassSelectPopup = {
  initValue:  {
    classLabel: 'Class 1',
    classUri: '<uri1>',
    instanceCount: 98443,
  },
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
ClassSelectInitVal.args = args1;

export const ClassSelectNoInitVal = Template.bind({});
const args2: JSX.GeovClassSelectPopup = {
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
ClassSelectNoInitVal.args = args2;

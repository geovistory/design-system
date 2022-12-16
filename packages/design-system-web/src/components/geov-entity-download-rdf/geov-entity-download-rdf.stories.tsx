import React from 'react';
import { JSX } from '../..';
import { GeovEntityDownloadRdf } from '../../../.storybook/stencil-generated/component';

export default {
  title: 'Data Components/Entity/Download RDF',
  component: GeovEntityDownloadRdf,
};
const Template = (args: JSX.GeovEntityDownloadRdf) => <GeovEntityDownloadRdf {...args}></GeovEntityDownloadRdf>;

export const EntityDownloadRdf = Template.bind({});
const args: JSX.GeovEntityDownloadRdf = {
  entityId: 'i785518',
  color: 'primary',
  expand: 'block',
  fill: 'outline',
  buttonLabel: 'Download RDF',
  buttonIcon: 'download-outline',
};
EntityDownloadRdf.args = args;

export const EntityDownloadRdf2 = Template.bind({});
const args2: JSX.GeovEntityDownloadRdf = {
  entityId: 'i785518',
  color: 'warning',
  fill: 'outline',
  buttonLabel: 'Download',
  buttonIcon: 'download-sharp',
};
EntityDownloadRdf2.args = args2;

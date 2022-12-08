import React from 'react';
import { JSX } from '../..';
import { GeovEntityDownloadRdf } from '../../../.storybook/stencil-generated/component';

export default {
  title: 'Data Components/Entity/Download RDF',
  component: GeovEntityDownloadRdf,
};
const Template = (args: JSX.GeovEntityDownloadRdf) => <GeovEntityDownloadRdf></GeovEntityDownloadRdf>;

export const EntityDownloadRdf = Template.bind({});
const args: JSX.GeovEntityDownloadRdf = {};
EntityDownloadRdf.args = args;

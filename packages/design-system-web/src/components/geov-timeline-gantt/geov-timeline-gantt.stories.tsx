import { h } from '@stencil/core';
import { stencilWrapper } from '../../../.storybook/lib/stencilWrapper';
import { docsTemlpate } from '../../../.storybook/templates/docsTemplate';
import componentApi from './docs-component-api.md?raw';
import overview from './docs-overview.md?raw';
export default {
  title: 'Data Visualization Components/Timeline Gantt',
  tags: ['autodocs'],
  parameters: {
    viewMode: 'docs',
    docs: {
      page: () => docsTemlpate(overview, componentApi),
    },
  },
};

type timespanData = {
  entityLabel: string;
  entityClassLabel: string;
  entityUri: string;
  startDate: string;
  endDate: string;
};

const ts1: timespanData = {
  entityLabel: 'Example Entity 1',
  entityClassLabel: 'Example Class 1',
  entityUri: 'https://example.com/entity',
  startDate: '2022-01-01',
  endDate: '2022-01-01',
};

const ts2: timespanData = {
  entityLabel: 'Example Entity 2',
  entityClassLabel: 'Example Class 2',
  entityUri: 'https://example.com/entity',
  startDate: '2022-05-01',
  endDate: '2022-05-03',
};

const ts3: timespanData = {
  entityLabel: 'Example Entity 3',
  entityClassLabel: 'Example Class 3',
  entityUri: 'https://example.com/entity',
  startDate: '2022-08-01',
  endDate: '2022-12-31',
};

const ts4: timespanData = {
  entityLabel: 'Example Entity 4',
  entityClassLabel: 'Example Class 4',
  entityUri: 'https://www.google.com',
  startDate: '2023-01-01',
  endDate: '2023-12-31',
};

const dataTimespansTest = [ts1, ts2, ts3, ts4];

export const Test = await stencilWrapper(<geov-timeline-gantt data={dataTimespansTest}></geov-timeline-gantt>);

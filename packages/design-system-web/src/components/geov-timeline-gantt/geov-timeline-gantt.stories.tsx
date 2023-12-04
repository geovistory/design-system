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
  entityLabel: 'Birth of Johann Kepler',
  entityClassLabel: 'Birth',
  entityUri: 'https://example.com/entity',
  startDate: '1571-12-27',
  endDate: '1571-12-27',
};

const ts2: timespanData = {
  entityLabel: 'Death of Johann Kepler',
  entityClassLabel: 'Death',
  entityUri: 'https://example.com/entity',
  startDate: '1630-11-15',
  endDate: '1630-11-15',
};

const ts3: timespanData = {
  entityLabel: 'One moment in his life',
  entityClassLabel: 'Live',
  entityUri: 'https://example.com/entity',
  startDate: '1600-01-01',
  endDate: '1600-12-31',
};

const ts4: timespanData = {
  entityLabel: 'Another moment in his life',
  entityClassLabel: 'Live',
  entityUri: 'https://example.com/entity',
  startDate: '1610-01-01',
  endDate: '1620-12-31',
};

const ts5: timespanData = {
  entityLabel: 'Another moment in his life 2',
  entityClassLabel: 'Live',
  entityUri: 'https://example.com/entity',
  startDate: '1590-01-01',
  endDate: '1595-12-31',
};

const dataTimespansTest = [ts1, ts2, ts3, ts4, ts5];
export const Base = await stencilWrapper(<geov-timeline-gantt data={dataTimespansTest}></geov-timeline-gantt>);

/**
 * Use lineHeight to determine the thickness, in pixels, of a line of data, and barPercentage to determine the percentage thickness of the bar in relation to the thickness of its line
 */
export const lineHeightAndBarPercentage = await stencilWrapper(<geov-timeline-gantt data={dataTimespansTest} lineHeight={50} barPercentage={0.3}></geov-timeline-gantt>);

/**
 * Use backgroundColor to choose the colour of the bar and borderColor to choose the colour of the border, if borderWidth > 0.
 */
export const colors = await stencilWrapper(
  <geov-timeline-gantt data={dataTimespansTest} backgroundColor={[0, 0, 255, 1]} borderWidth={2} borderColor={[255, 0, 0, 1]}></geov-timeline-gantt>,
);

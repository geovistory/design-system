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
  entityLabel: { type: 'literal'; value: string };
  entityClassLabel: { type: 'literal'; value: string };
  entityUri: { type: 'uri'; value: string };
  startDate: { type: 'literal'; datatype: 'http://www.w3.org/2001/XMLSchema#date'; value: string };
  endDate: { type: 'literal'; datatype: 'http://www.w3.org/2001/XMLSchema#date'; value: string };
};

const ts1: timespanData = {
  entityLabel: { type: 'literal', value: 'Birth of Johann Kepler' },
  entityClassLabel: { type: 'literal', value: 'Birth' },
  entityUri: { type: 'uri', value: 'https://example.com/entity' },
  startDate: { type: 'literal', datatype: 'http://www.w3.org/2001/XMLSchema#date', value: '1571-12-27' },
  endDate: { type: 'literal', datatype: 'http://www.w3.org/2001/XMLSchema#date', value: '1571-12-27' },
};

const ts2: timespanData = {
  entityLabel: { type: 'literal', value: 'Death of Johann Kepler' },
  entityClassLabel: { type: 'literal', value: 'Death' },
  entityUri: { type: 'uri', value: 'https://example.com/entity' },
  startDate: { type: 'literal', datatype: 'http://www.w3.org/2001/XMLSchema#date', value: '1630-01-01' },
  endDate: { type: 'literal', datatype: 'http://www.w3.org/2001/XMLSchema#date', value: '1630-12-31' },
};

const ts3: timespanData = {
  entityLabel: { type: 'literal', value: 'One moment in his life' },
  entityClassLabel: { type: 'literal', value: 'Live' },
  entityUri: { type: 'uri', value: 'https://example.com/entity' },
  startDate: { type: 'literal', datatype: 'http://www.w3.org/2001/XMLSchema#date', value: '1600-01-01' },
  endDate: { type: 'literal', datatype: 'http://www.w3.org/2001/XMLSchema#date', value: '1600-01-01' },
};

const ts3bis: timespanData = {
  entityLabel: { type: 'literal', value: 'One moment in his life 3' },
  entityClassLabel: { type: 'literal', value: 'Live' },
  entityUri: { type: 'uri', value: 'https://example.com/entity' },
  startDate: { type: 'literal', datatype: 'http://www.w3.org/2001/XMLSchema#date', value: '1599-12-25' },
  endDate: { type: 'literal', datatype: 'http://www.w3.org/2001/XMLSchema#date', value: '1599-12-31' },
};

const ts4: timespanData = {
  entityLabel: { type: 'literal', value: 'Another moment in his life' },
  entityClassLabel: { type: 'literal', value: 'Live' },
  entityUri: { type: 'uri', value: 'https://example.com/entity' },
  startDate: { type: 'literal', datatype: 'http://www.w3.org/2001/XMLSchema#date', value: '1610-01-01' },
  endDate: { type: 'literal', datatype: 'http://www.w3.org/2001/XMLSchema#date', value: '1620-12-31' },
};

const ts5: timespanData = {
  entityLabel: { type: 'literal', value: 'Another moment in his life 2' },
  entityClassLabel: { type: 'literal', value: 'Live' },
  entityUri: { type: 'uri', value: 'https://example.com/entity' },
  startDate: { type: 'literal', datatype: 'http://www.w3.org/2001/XMLSchema#date', value: '1590-06-01' },
  endDate: { type: 'literal', datatype: 'http://www.w3.org/2001/XMLSchema#date', value: '1595-12-31' },
};

const ts6: timespanData = {
  entityLabel: { type: 'literal', value: 'Another moment in his life 5' },
  entityClassLabel: { type: 'literal', value: 'Live' },
  entityUri: { type: 'uri', value: 'https://example.com/entity' },
  startDate: { type: 'literal', datatype: 'http://www.w3.org/2001/XMLSchema#date', value: '1576-09-01' },
  endDate: { type: 'literal', datatype: 'http://www.w3.org/2001/XMLSchema#date', value: '1576-12-31' },
};

const ts7: timespanData = {
  entityLabel: { type: 'literal', value: 'Another moment in his life 4' },
  entityClassLabel: { type: 'literal', value: 'Live' },
  entityUri: { type: 'uri', value: 'https://example.com/entity' },
  startDate: { type: 'literal', datatype: 'http://www.w3.org/2001/XMLSchema#date', value: '1584-06-01' },
  endDate: { type: 'literal', datatype: 'http://www.w3.org/2001/XMLSchema#date', value: '1585-12-31' },
};

const dataTimespansTest = [ts1, ts2, ts3, ts3bis, ts4, ts5, ts6, ts7];
export const Base = await stencilWrapper(<geov-timeline-gantt data={dataTimespansTest}></geov-timeline-gantt>);

/**
 * Use maxHeight for limit height of canvas, lineHeight to determine the thickness, in pixels, of a line of data, and barPercentage to determine the percentage thickness of the bar in relation to the thickness of its line
 */
export const MaxHeightLineHeightAndBarPercentage = await stencilWrapper(
  <geov-timeline-gantt data={dataTimespansTest} maxHeight={200} lineHeight={50} barPercentage={0.3}></geov-timeline-gantt>,
);

/**
 * Use backgroundColor to choose the colour of the bar and borderColor to choose the colour of the border, if borderWidth > 0.
 * You can use the css var --gantt-timeline-background-color for change the background color.
 */
export const colors = await stencilWrapper(
  <div>
    <style>{`
  .customBg {
    --gantt-timeline-background-color: beige;
  }
`}</style>
    <geov-timeline-gantt class="customBg" data={dataTimespansTest} backgroundColor={[0, 0, 255, 1]} borderWidth={2} borderColor={[255, 0, 0, 1]}></geov-timeline-gantt>
  </div>,
);

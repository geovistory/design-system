import { JSX } from '../..';
import { DEFAULT_SPARQL_ENDPOINT } from '../../../.storybook/config/defaulSparqlEndpoint';
import { GeovDataFetchExample } from '../../../.storybook/stencil-generated/component';

export default {
  title: 'Components/DataFetchExamle',
  component: GeovDataFetchExample,
};
const Template = (args: JSX.GeovDataFetchExample) => <GeovDataFetchExample {...args}></GeovDataFetchExample>;

export const DataFetchExamle = Template.bind({});
const args: JSX.GeovDataFetchExample = {
  sparqlEndpoint: DEFAULT_SPARQL_ENDPOINT,
  entityId: 'i315800',
};
DataFetchExamle.args = args;

export const DataFetchExamlePreloaded = Template.bind({});
const preloaded: JSX.GeovDataFetchExample = {
  sparqlEndpoint: DEFAULT_SPARQL_ENDPOINT,
  entityId: 'i315800',
  data: {
    loading: false,
    error: false,
    label: 'This is preloaded!',
  },
};
DataFetchExamlePreloaded.args = preloaded;

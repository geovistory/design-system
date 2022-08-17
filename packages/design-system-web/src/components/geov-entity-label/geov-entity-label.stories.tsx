import { JSX } from '../..';
import { DEFAULT_SPARQL_ENDPOINT } from '../../../.storybook/config/defaulSparqlEndpoint';
import { GeovEntityLabel } from '../../../.storybook/stencil-generated/component';

export default {
  title: 'Basic Components/EntityLabel',
  component: GeovEntityLabel,
};
const Template = (args: JSX.GeovEntityLabel) => <GeovEntityLabel {...args}></GeovEntityLabel>;

export const EntityLabel = Template.bind({});
const args: JSX.GeovEntityLabel = {
  sparqlEndpoint: DEFAULT_SPARQL_ENDPOINT,
  entityId: 'i315800',
};
EntityLabel.args = args;

export const EntityLabelPreloaded = Template.bind({});
const preloaded: JSX.GeovEntityLabel = {
  sparqlEndpoint: DEFAULT_SPARQL_ENDPOINT,
  entityId: 'i315800',
  data: {
    loading: false,
    error: false,
    label: 'This is preloaded!',
  },
};
EntityLabelPreloaded.args = preloaded;

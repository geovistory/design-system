import { Components } from '../..';
import { toArgs } from '../../../.storybook/lib/toArgs';
import { DEFAULT_SPARQL_ENDPOINT } from '../../../.storybook/config/defaulSparqlEndpoint';
import { GeovEntityLabel } from '../../../.storybook/stencil-generated/component';

export default {
  title: 'Basic Components/EntityLabel',
  component: GeovEntityLabel,
};
const Template = (args: Components.GeovEntityLabel) => <GeovEntityLabel {...args}></GeovEntityLabel>;

export const EntityLabel = Template.bind({});
const args: Components.GeovEntityLabel = {
  sparqlEndpoint: DEFAULT_SPARQL_ENDPOINT,
  entityId: 'i315800',
};
EntityLabel.args = args;


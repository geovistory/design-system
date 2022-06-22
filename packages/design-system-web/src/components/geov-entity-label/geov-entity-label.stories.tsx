import { Components } from '../..';
import { toArgs } from '../../../.storybook/lib/toArgs';
import { DEFAULT_SPARQL_ENDPOINT } from '../../../.storybook/config/defaulSparqlEndpoint';

export default {
  title: 'Basic Components/EntityLabel',
};
const Template = (args: Components.GeovEntityLabel) => `
  <geov-entity-label ${toArgs(args)}></geov-entity-label>
`;
export const EntityLabel = Template.bind({});
const args: Components.GeovEntityLabel = {
  sparqlEndpoint: DEFAULT_SPARQL_ENDPOINT,
  entityId: 'i315800',
};
EntityLabel.args = args;


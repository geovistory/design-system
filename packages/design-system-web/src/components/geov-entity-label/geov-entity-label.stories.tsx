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

const TemplateInitData = (args: JSX.GeovEntityLabel) => (
    <GeovEntityLabel {...args}></GeovEntityLabel>
);
export const EntityLabelDataGiven = TemplateInitData.bind({});
const dataGiven: JSX.GeovEntityLabel = {
  sparqlEndpoint: DEFAULT_SPARQL_ENDPOINT,
  entityId: 'i315800',
  _ssrId: '8wrr2f'
};
EntityLabelDataGiven.args = dataGiven;

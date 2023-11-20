import { h } from '@stencil/core';
import { MARITIME_SPARQL_ENDPOINT } from '../../../.storybook/config/defaulSparqlEndpoint';
import { stencilWrapper } from '../../../.storybook/lib/stencilWrapper';
import { docsTemlpate } from '../../../.storybook/templates/docsTemplate';
import componentApi from './docs-component-api.md?raw';
import overview from './docs-overview.md?raw';
export default {
  title: 'Data Components/Entity/Time Span',
  tags: ['autodocs'],
  parameters: {
    viewMode: 'docs',
    docs: {
      page: () => docsTemlpate(overview, componentApi),
    },
  },
};

export const ShipVoyage = await stencilWrapper(
  <geov-time-span sparqlEndpoint={MARITIME_SPARQL_ENDPOINT} entityUri={'http://geovistory.org/resource/i153984ts'} fetchBeforeRender={false}></geov-time-span>,
);

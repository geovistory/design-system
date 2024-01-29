import { h } from '@stencil/core';
import { stencilWrapper } from '../../../.storybook/lib/stencilWrapper';
import { docsTemlpate } from '../../../.storybook/templates/docsTemplate';
import componentApi from './docs-component-api.md?raw';
import overview from './docs-overview.md?raw';
import { MARITIME_SPARQL_ENDPOINT } from '../../../.storybook/config/defaulSparqlEndpoint';
export default {
  title: 'Data Components/Entity/Entity Predicate Modal',
  tags: ['autodocs'],
  parameters: {
    viewMode: 'docs',
    docs: {
      page: () => docsTemlpate(overview, componentApi),
    },
  },
};

export const Modal = await stencilWrapper(
  <geov-entity-predicate-modal
    modalTitle="Modal title"
    sparqlEndpoint={MARITIME_SPARQL_ENDPOINT}
    entityUri="http://geovistory.org/resource/i209502"
    totalCount={2980}
    language="en"
    predicateUri="https://ontome.net/ontology/p1335i"
    predicateLabel="was departure place of"
    fetchBeforeRender={false}
  >
    <ion-button>Open</ion-button>
  </geov-entity-predicate-modal>,
);

import { h } from '@stencil/core';
import { stencilWrapper } from '../../helpers/stencilWrapper';
import { defineCustomElement } from '../../../dist/components/geov-data-fetch-example';
import { DEFAULT_SPARQL_ENDPOINT } from '../../../.storybook/config/defaulSparqlEndpoint';
defineCustomElement();
export default {
  title: 'Data Components/DataFetchExample',
};

export const DataFetchExample = stencilWrapper(<geov-data-fetch-example sparqlEndpoint={DEFAULT_SPARQL_ENDPOINT} entityId="i315800"></geov-data-fetch-example>);

export const DataFetchExamplePreloaded = stencilWrapper(
  <geov-data-fetch-example sparqlEndpoint={DEFAULT_SPARQL_ENDPOINT} entityId="i315800" _ssrId="data-fetch-examle-1"></geov-data-fetch-example>,
);

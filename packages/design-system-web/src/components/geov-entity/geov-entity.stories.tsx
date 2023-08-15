import { h } from '@stencil/core';
import { AMPI_SPARQL_ENDPOINT, DEFAULT_SPARQL_ENDPOINT } from '../../../.storybook/config/defaulSparqlEndpoint';
import { docsTemlpate } from '../../../.storybook/templates/docsTemplate';
import { stencilWrapper } from '../../../.storybook/lib/stencilWrapper';
import componentApi from './docs-component-api.md?raw';
import overview from './docs-overview.md?raw';
export default {
  title: 'Data Components/Entity/Entity',
  tags: ['autodocs'],
  parameters: {
    viewMode: 'docs',
    docs: {
      page: () => docsTemlpate(overview, componentApi),
    },
  },
};
export const ShipVoyage = await stencilWrapper(<geov-entity sparqlEndpoint={DEFAULT_SPARQL_ENDPOINT} entityId="i151089" language="en" fetchBeforeRender={false}></geov-entity>);
export const GeographicalPlace = await stencilWrapper(
  <geov-entity sparqlEndpoint={DEFAULT_SPARQL_ENDPOINT} entityId="i209502" language="en" fetchBeforeRender={false}></geov-entity>,
);
export const JohannesKepler = await stencilWrapper(<geov-entity sparqlEndpoint={DEFAULT_SPARQL_ENDPOINT} entityId="i785518" language="en" fetchBeforeRender={false}></geov-entity>);
export const Birth = await stencilWrapper(<geov-entity sparqlEndpoint={AMPI_SPARQL_ENDPOINT} entityId="i542181" language="en" fetchBeforeRender={false}></geov-entity>);
export const TimeSpan = await stencilWrapper(<geov-entity sparqlEndpoint={AMPI_SPARQL_ENDPOINT} entityId="i542181ts" language="de" fetchBeforeRender={false}></geov-entity>);
export const DateTimeYear = await stencilWrapper(<geov-entity sparqlEndpoint={AMPI_SPARQL_ENDPOINT} entityId="i609119" language="de" fetchBeforeRender={false}></geov-entity>);
export const DateTimeMonth = await stencilWrapper(<geov-entity sparqlEndpoint={AMPI_SPARQL_ENDPOINT} entityId="i986993" language="de" fetchBeforeRender={false}></geov-entity>);
export const DateTimeDay = await stencilWrapper(<geov-entity sparqlEndpoint={AMPI_SPARQL_ENDPOINT} entityId="i872676" language="de" fetchBeforeRender={false}></geov-entity>);

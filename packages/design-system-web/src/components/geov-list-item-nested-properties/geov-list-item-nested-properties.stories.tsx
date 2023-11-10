import { h } from '@stencil/core';
import { AMPI_SPARQL_ENDPOINT, DEFAULT_SPARQL_ENDPOINT, MARITIME_SPARQL_ENDPOINT } from '../../../.storybook/config/defaulSparqlEndpoint';
import { docsTemlpate } from '../../../.storybook/templates/docsTemplate';
import { stencilWrapper } from '../../../.storybook/lib/stencilWrapper';
import componentApi from './docs-component-api.md?raw';
import overview from './docs-overview.md?raw';
export default {
  title: 'Data Components/Entity/List Item Nested Properties',
  tags: ['autodocs'],
  parameters: {
    viewMode: 'docs',
    docs: {
      page: () => docsTemlpate(overview, componentApi),
    },
  },
};

export const Person = await stencilWrapper(
  <geov-list-item-nested-properties
    sparqlEndpoint={AMPI_SPARQL_ENDPOINT}
    entityUri={'http://geovistory.org/resource/i868683'}
    language="en"
    fetchBeforeRender={false}
  ></geov-list-item-nested-properties>,
);
export const Birth = await stencilWrapper(
  <geov-list-item-nested-properties
    sparqlEndpoint={AMPI_SPARQL_ENDPOINT}
    entityUri={'http://geovistory.org/resource/i868690'}
    language="en"
    fetchBeforeRender={false}
  ></geov-list-item-nested-properties>,
);
export const TimeSpan = await stencilWrapper(
  <geov-list-item-nested-properties
    sparqlEndpoint={AMPI_SPARQL_ENDPOINT}
    entityUri={'http://geovistory.org/resource/i868690ts'}
    language="en"
    fetchBeforeRender={false}
  ></geov-list-item-nested-properties>,
);

export const DateTimeDescription = await stencilWrapper(
  <geov-list-item-nested-properties
    sparqlEndpoint={AMPI_SPARQL_ENDPOINT}
    entityUri={'http://geovistory.org/resource/i816636'}
    language="en"
    fetchBeforeRender={false}
  ></geov-list-item-nested-properties>,
);

export const AnnotationInText = await stencilWrapper(
  <geov-list-item-nested-properties
    sparqlEndpoint={AMPI_SPARQL_ENDPOINT}
    entityUri={'http://geovistory.org/resource/i2486333'}
    language="en"
    fetchBeforeRender={false}
  ></geov-list-item-nested-properties>,
);

export const Text = await stencilWrapper(
  <geov-list-item-nested-properties
    sparqlEndpoint={AMPI_SPARQL_ENDPOINT}
    entityUri={'http://geovistory.org/resource/i2345726'}
    language="en"
    fetchBeforeRender={false}
  ></geov-list-item-nested-properties>,
);

export const Definition = await stencilWrapper(
  <geov-list-item-nested-properties
    sparqlEndpoint={AMPI_SPARQL_ENDPOINT}
    entityUri={'http://geovistory.org/resource/i2244657'}
    language="en"
    fetchBeforeRender={false}
  ></geov-list-item-nested-properties>,
);

export const SourceContentCreation = await stencilWrapper(
  <geov-list-item-nested-properties
    sparqlEndpoint={AMPI_SPARQL_ENDPOINT}
    entityUri={'http://geovistory.org/resource/i994821'}
    language="en"
    fetchBeforeRender={false}
  ></geov-list-item-nested-properties>,
);

export const PersonTwo = await stencilWrapper(
  <geov-list-item-nested-properties
    sparqlEndpoint={DEFAULT_SPARQL_ENDPOINT}
    entityUri={'http://geovistory.org/resource/i1772506'}
    language="en"
    fetchBeforeRender={false}
  ></geov-list-item-nested-properties>,
);

export const ShipVoyage = await stencilWrapper(
  <geov-list-item-nested-properties
    sparqlEndpoint={MARITIME_SPARQL_ENDPOINT}
    entityUri={'http://geovistory.org/resource/i153984'}
    language="en"
    fetchBeforeRender={false}
  ></geov-list-item-nested-properties>,
);

export const GeographicalPlace = await stencilWrapper(
  <geov-list-item-nested-properties
    sparqlEndpoint={MARITIME_SPARQL_ENDPOINT}
    entityUri={'http://geovistory.org/resource/i209325'}
    language="en"
    fetchBeforeRender={false}
  ></geov-list-item-nested-properties>,
);

export const Presence = await stencilWrapper(
  <geov-list-item-nested-properties
    sparqlEndpoint={MARITIME_SPARQL_ENDPOINT}
    entityUri={'http://geovistory.org/resource/i252513'}
    language="en"
    fetchBeforeRender={false}
  ></geov-list-item-nested-properties>,
);

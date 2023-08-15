import { h } from '@stencil/core';
import { DEFAULT_SPARQL_ENDPOINT } from '../../../.storybook/config/defaulSparqlEndpoint';
import { docsTemlpate } from '../../../.storybook/templates/docsTemplate';
import { stencilWrapper } from '../../../.storybook/lib/stencilWrapper';
import componentApi from './docs-component-api.md?raw';
import overview from './docs-overview.md?raw';
export default {
  title: 'Data Components/Entity/Entity Properties',
  tags: ['autodocs'],
  parameters: {
    viewMode: 'docs',
    docs: {
      page: () => docsTemlpate(overview, componentApi),
    },
  },
};

export const EntityPropertiesTeEn = await stencilWrapper(
  <geov-entity-properties sparqlEndpoint={DEFAULT_SPARQL_ENDPOINT} entityId="i151089" language="en" fetchBeforeRender={false}></geov-entity-properties>,
);

export const EntityPropertiesRammekensToJakarta = await stencilWrapper(
  <geov-entity-properties sparqlEndpoint={DEFAULT_SPARQL_ENDPOINT} entityId="i152157" language="en" fetchBeforeRender={false}></geov-entity-properties>,
);

export const EntityPropertiesPeIt = await stencilWrapper(
  <geov-entity-properties sparqlEndpoint={DEFAULT_SPARQL_ENDPOINT} entityId="i209502" language="en" fetchBeforeRender={false}></geov-entity-properties>,
);

export const EntityPropertiesPresence = await stencilWrapper(
  <geov-entity-properties sparqlEndpoint={DEFAULT_SPARQL_ENDPOINT} entityId="i253594" language="en" fetchBeforeRender={false}></geov-entity-properties>,
);

export const EntityPropertiesTimeSpan = await stencilWrapper(
  <geov-entity-properties sparqlEndpoint={DEFAULT_SPARQL_ENDPOINT} entityId="i151089ts" language="en" fetchBeforeRender={false}></geov-entity-properties>,
);

export const EntityPropertiesRammekensToJakartaPreloaded = await stencilWrapper(
  <geov-entity-properties
    sparqlEndpoint={DEFAULT_SPARQL_ENDPOINT}
    entityId="i152157"
    language="en"
    fetchBeforeRender={true}
    _ssrId="data-entity-properties-1"
  ></geov-entity-properties>,
);

export const EntityPropertiesColorPrimary = await stencilWrapper(
  <geov-entity-properties
    sparqlEndpoint={DEFAULT_SPARQL_ENDPOINT}
    entityId="i152157"
    language="en"
    fetchBeforeRender={true}
    _ssrId="data-entity-properties-1"
    color="tertiary"
  ></geov-entity-properties>,
);

export const EntityPropertiesPredicateInclude = await stencilWrapper(
  <geov-entity-properties
    sparqlEndpoint={DEFAULT_SPARQL_ENDPOINT}
    entityId="i86177"
    language="en"
    fetchBeforeRender={false}
    predicateInclude={['http://www.w3.org/2000/01/rdf-schema#label', 'https://ontome.net/ontology/p1111i'].join(',')}
  ></geov-entity-properties>,
);

export const EntityPropertiesPredicateExclude = await stencilWrapper(
  <geov-entity-properties
    sparqlEndpoint={DEFAULT_SPARQL_ENDPOINT}
    entityId="i86177"
    language="en"
    fetchBeforeRender={false}
    predicateExclude={['http://www.w3.org/2000/01/rdf-schema#label', 'https://ontome.net/ontology/p1111i'].join(',')}
  ></geov-entity-properties>,
);

export const EntityPropertiesFixedGrid = await stencilWrapper(
  <geov-entity-properties sparqlEndpoint={DEFAULT_SPARQL_ENDPOINT} entityId="i209502" language="en" fetchBeforeRender={false} fixedGrid={true}></geov-entity-properties>,
);

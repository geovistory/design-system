import { h } from '@stencil/core';
import { stencilWrapper } from '../../helpers/stencilWrapper';
import { DEFAULT_SPARQL_ENDPOINT } from '../../../.storybook/config/defaulSparqlEndpoint';

export default {
  title: 'Data Components/Entity/Entity Properties',
};

export const EntityPropertiesTeEn = stencilWrapper(
  <geov-entity-properties sparqlEndpoint={DEFAULT_SPARQL_ENDPOINT} entityId="i151089" language="en" fetchBeforeRender={false}></geov-entity-properties>,
);

export const EntityPropertiesRammekensToJakarta = stencilWrapper(
  <geov-entity-properties sparqlEndpoint={DEFAULT_SPARQL_ENDPOINT} entityId="i152157" language="en" fetchBeforeRender={false}></geov-entity-properties>,
);

export const EntityPropertiesPeIt = stencilWrapper(
  <geov-entity-properties sparqlEndpoint={DEFAULT_SPARQL_ENDPOINT} entityId="i209502" language="en" fetchBeforeRender={false}></geov-entity-properties>,
);

export const EntityPropertiesPresence = stencilWrapper(
  <geov-entity-properties sparqlEndpoint={DEFAULT_SPARQL_ENDPOINT} entityId="i253594" language="en" fetchBeforeRender={false}></geov-entity-properties>,
);

export const EntityPropertiesTimeSpan = stencilWrapper(
  <geov-entity-properties sparqlEndpoint={DEFAULT_SPARQL_ENDPOINT} entityId="i151089ts" language="en" fetchBeforeRender={false}></geov-entity-properties>,
);

export const EntityPropertiesRammekensToJakartaPreloaded = stencilWrapper(
  <geov-entity-properties
    sparqlEndpoint={DEFAULT_SPARQL_ENDPOINT}
    entityId="i152157"
    language="en"
    fetchBeforeRender={true}
    _ssrId="data-entity-properties-1"
  ></geov-entity-properties>,
);

export const EntityPropertiesColorPrimary = stencilWrapper(
  <geov-entity-properties
    sparqlEndpoint={DEFAULT_SPARQL_ENDPOINT}
    entityId="i152157"
    language="en"
    fetchBeforeRender={true}
    _ssrId="data-entity-properties-1"
    color="tertiary"
  ></geov-entity-properties>,
);

export const EntityPropertiesPredicateInclude = stencilWrapper(
  <geov-entity-properties
    sparqlEndpoint={DEFAULT_SPARQL_ENDPOINT}
    entityId="i86177"
    language="en"
    fetchBeforeRender={false}
    predicateInclude={['http://www.w3.org/2000/01/rdf-schema#label', 'https://ontome.net/ontology/p1111i'].join(',')}
  ></geov-entity-properties>,
);

export const EntityPropertiesPredicateExclude = stencilWrapper(
  <geov-entity-properties
    sparqlEndpoint={DEFAULT_SPARQL_ENDPOINT}
    entityId="i86177"
    language="en"
    fetchBeforeRender={false}
    predicateExclude={['http://www.w3.org/2000/01/rdf-schema#label', 'https://ontome.net/ontology/p1111i'].join(',')}
  ></geov-entity-properties>,
);

export const EntityPropertiesFixedGrid = stencilWrapper(
  <geov-entity-properties sparqlEndpoint={DEFAULT_SPARQL_ENDPOINT} entityId="i209502" language="en" fetchBeforeRender={false} fixedGrid={true}></geov-entity-properties>,
);

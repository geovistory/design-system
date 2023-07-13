import { h } from '@stencil/core';
import { DEFAULT_SPARQL_ENDPOINT } from '../../../.storybook/config/defaulSparqlEndpoint';
import { docsTemlpate } from '../../../.storybook/templates/docsTemplate';
import { stencilWrapper } from '../../helpers/stencilWrapper';
import componentApi from './docs-component-api.md?raw';
import overview from './docs-overview.md?raw';
export default {
  title: 'Data Components/Entity/Entity Props By Predicate',
    tags: ['autodocs'],
  parameters: {
    viewMode: 'docs',
    docs: {
      page: () => docsTemlpate(overview, componentApi),
    },
  },
};

export const EntityPropsWithPerson = stencilWrapper(
  <geov-entity-props-by-predicate
    sparqlEndpoint={DEFAULT_SPARQL_ENDPOINT}
    entityId="i151089"
    totalCount={1}
    language="en"
    predicateUri="https://ontome.net/ontology/p1359"
    predicateLabel="participated in"
    fetchBeforeRender={false}
  ></geov-entity-props-by-predicate>,
);

export const EntityPropsWithUriRegex = stencilWrapper(
  <geov-entity-props-by-predicate
    sparqlEndpoint={DEFAULT_SPARQL_ENDPOINT}
    entityId="i151089"
    totalCount={1}
    language="en"
    predicateUri="https://ontome.net/ontology/p1359"
    predicateLabel="participated in"
    uriRegex="(http://geovistory.org/resource/)(.*)"
    uriReplace="http://dev.geovistory.org/resource/$2?p=123"
    fetchBeforeRender={false}
  ></geov-entity-props-by-predicate>,
);

export const EntityPropsWithPaginatedShipVoyages = stencilWrapper(
  <geov-entity-props-by-predicate
    sparqlEndpoint={DEFAULT_SPARQL_ENDPOINT}
    entityId="i209502"
    totalCount={2980}
    language="en"
    predicateUri="https://ontome.net/ontology/p1335"
    predicateLabel="had departure place"
    fetchBeforeRender={false}
  ></geov-entity-props-by-predicate>,
);

export const EntityPropsWithDateTimeDescription = stencilWrapper(
  <geov-entity-props-by-predicate
    sparqlEndpoint={DEFAULT_SPARQL_ENDPOINT}
    entityId="i151089ts"
    totalCount={1}
    language="en"
    predicateUri="https://ontome.net/ontology/p150"
    predicateLabel="end of the begin"
    fetchBeforeRender={false}
  ></geov-entity-props-by-predicate>,
);

export const EntityPropsWithXsdString = stencilWrapper(
  <geov-entity-props-by-predicate
    sparqlEndpoint={DEFAULT_SPARQL_ENDPOINT}
    entityId="i215634"
    totalCount={1}
    language="en"
    predicateUri="https://ontome.net/ontology/p1113"
    predicateLabel="refers to name"
    fetchBeforeRender={false}
  ></geov-entity-props-by-predicate>,
);

export const EntityPropsWithLangString = stencilWrapper(
  <geov-entity-props-by-predicate
    sparqlEndpoint={DEFAULT_SPARQL_ENDPOINT}
    entityId="i2345931"
    totalCount={1}
    language="en"
    predicateUri="https://ontome.net/ontology/p1761"
    predicateLabel="has short title"
    fetchBeforeRender={false}
  ></geov-entity-props-by-predicate>,
);

export const EntityPropsWithXsdStringPreloaded = stencilWrapper(
  <geov-entity-props-by-predicate
    sparqlEndpoint={DEFAULT_SPARQL_ENDPOINT}
    entityId="i215635"
    totalCount={1}
    language="en"
    predicateUri="https://ontome.net/ontology/p1113"
    predicateLabel="refers to name"
    fetchBeforeRender={true}
    _ssrId="data-entity-props-by-predicate-1"
  ></geov-entity-props-by-predicate>,
);

export const OwlSameAs = stencilWrapper(
  <geov-entity-props-by-predicate
    sparqlEndpoint={DEFAULT_SPARQL_ENDPOINT}
    entityId="i785518"
    totalCount={3}
    language="en"
    predicateUri="http://www.w3.org/2002/07/owl#sameAs"
    predicateLabel="same as"
    fetchBeforeRender={false}
  ></geov-entity-props-by-predicate>,
);

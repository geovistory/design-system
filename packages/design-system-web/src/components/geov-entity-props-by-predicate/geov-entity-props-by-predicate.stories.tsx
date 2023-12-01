import { h } from '@stencil/core';
import { DEFAULT_SPARQL_ENDPOINT, MARITIME_SPARQL_ENDPOINT } from '../../../.storybook/config/defaulSparqlEndpoint';
import { stencilWrapper } from '../../../.storybook/lib/stencilWrapper';
import { docsTemlpate } from '../../../.storybook/templates/docsTemplate';
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

export const Person = await stencilWrapper(
  <geov-entity-props-by-predicate
    sparqlEndpoint={MARITIME_SPARQL_ENDPOINT}
    entityUri="http://geovistory.org/resource/i151089"
    totalCount={1}
    language="en"
    predicateUri="https://ontome.net/ontology/p1359i"
    predicateLabel="had as participant"
    fetchBeforeRender={false}
  ></geov-entity-props-by-predicate>,
);

export const PersonUriRegex = await stencilWrapper(
  <geov-entity-props-by-predicate
    sparqlEndpoint={MARITIME_SPARQL_ENDPOINT}
    entityUri="http://geovistory.org/resource/i151089"
    totalCount={1}
    language="en"
    predicateUri="https://ontome.net/ontology/p1359i"
    predicateLabel="had as participant"
    uriRegex="(http://geovistory.org/resource/)(.*)"
    uriReplace="http://dev.geovistory.org/resource/$2?p=123"
    fetchBeforeRender={false}
  ></geov-entity-props-by-predicate>,
);

export const PaginatedShipVoyages = await stencilWrapper(
  <geov-entity-props-by-predicate
    sparqlEndpoint={MARITIME_SPARQL_ENDPOINT}
    entityUri="http://geovistory.org/resource/i209502"
    totalCount={2980}
    language="en"
    predicateUri="https://ontome.net/ontology/p1335i"
    predicateLabel="was departure place of"
    fetchBeforeRender={false}
  ></geov-entity-props-by-predicate>,
);

export const DateTimeDescription = await stencilWrapper(
  <geov-entity-props-by-predicate
    sparqlEndpoint={MARITIME_SPARQL_ENDPOINT}
    entityUri="http://geovistory.org/resource/i151089ts"
    totalCount={1}
    language="en"
    predicateUri="https://ontome.net/ontology/p150"
    predicateLabel="end of the begin"
    fetchBeforeRender={false}
  ></geov-entity-props-by-predicate>,
);

export const XsdString = await stencilWrapper(
  <geov-entity-props-by-predicate
    sparqlEndpoint={MARITIME_SPARQL_ENDPOINT}
    entityUri="http://geovistory.org/resource/i215634"
    totalCount={1}
    language="en"
    predicateUri="https://ontome.net/ontology/p1113"
    predicateLabel="refers to name"
    fetchBeforeRender={false}
  ></geov-entity-props-by-predicate>,
);

export const XsdStringPreloaded = await stencilWrapper(
  <geov-entity-props-by-predicate
    sparqlEndpoint={MARITIME_SPARQL_ENDPOINT}
    entityUri="http://geovistory.org/resource/i215635"
    totalCount={1}
    language="en"
    predicateUri="https://ontome.net/ontology/p1113"
    predicateLabel="refers to name"
    fetchBeforeRender={true}
    _ssrId="data-entity-props-by-predicate-1"
  ></geov-entity-props-by-predicate>,
);

export const LangString = await stencilWrapper(
  <geov-entity-props-by-predicate
    sparqlEndpoint={MARITIME_SPARQL_ENDPOINT}
    entityUri="http://geovistory.org/resource/i2345931"
    totalCount={1}
    language="en"
    predicateUri="https://ontome.net/ontology/p1761"
    predicateLabel="has short title"
    fetchBeforeRender={false}
  ></geov-entity-props-by-predicate>,
);

export const WktLiteral = await stencilWrapper(
  <geov-entity-props-by-predicate
    sparqlEndpoint={DEFAULT_SPARQL_ENDPOINT}
    entityUri="http://geovistory.org/resource/i253708"
    totalCount={1}
    language="en"
    predicateUri="https://ontome.net/ontology/p148"
    predicateLabel="WAS WITHIN"
    fetchBeforeRender={true}
  ></geov-entity-props-by-predicate>,
);

export const OwlSameAs = await stencilWrapper(
  <geov-entity-props-by-predicate
    sparqlEndpoint={DEFAULT_SPARQL_ENDPOINT}
    entityUri="http://geovistory.org/resource/i81260"
    totalCount={2}
    language="en"
    predicateUri="http://www.w3.org/2002/07/owl#sameAs"
    predicateLabel="same as"
    fetchBeforeRender={false}
  ></geov-entity-props-by-predicate>,
);

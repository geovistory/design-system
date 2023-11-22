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
export const Presence = await stencilWrapper(<geov-entity sparqlEndpoint={DEFAULT_SPARQL_ENDPOINT} entityId="i253708" language="de" fetchBeforeRender={false}></geov-entity>);
export const Group = await stencilWrapper(<geov-entity sparqlEndpoint={DEFAULT_SPARQL_ENDPOINT} entityId="i2215290" language="en" fetchBeforeRender={false}></geov-entity>);
export const Text = await stencilWrapper(
  <geov-entity
    sparqlEndpoint="https://sparql.geovistory.org/api_v1_project_924033"
    entityId="i2346544"
    projectId={924033}
    uriRegex="(http://geovistory.org/resource/)(.*)"
    uriReplace="http://geovistory.org/resource/$2?p=924033"
    language="de"
    fetchBeforeRender={false}
  ></geov-entity>,
);
export const JohannesKepler = await stencilWrapper(
  <geov-entity
    sparqlEndpoint="https://sparql.geovistory.org/api_v1_project_1483135"
    entityId="i785518"
    projectId={1483135}
    language="en"
    fetchBeforeRender={false}
    uriRegex="(http://geovistory.org/resource/)(.*)"
    uriReplace="http://geovistory.org/resource/$2?p=1483135"
  ></geov-entity>,
);
export const Birth = await stencilWrapper(
  <geov-entity
    sparqlEndpoint="https://sparql.geovistory.org/api_v1_project_924033"
    entityId="i542181"
    projectId={924033}
    uriRegex="(http://geovistory.org/resource/)(.*)"
    uriReplace="http://geovistory.org/resource/$2?p=924033"
    language="en"
    fetchBeforeRender={false}
  ></geov-entity>,
);
export const TimeSpan = await stencilWrapper(
  <geov-entity
    sparqlEndpoint="https://sparql.geovistory.org/api_v1_project_924033"
    entityId="i542181ts"
    projectId={924033}
    uriRegex="(http://geovistory.org/resource/)(.*)"
    uriReplace="http://geovistory.org/resource/$2?p=924033"
    language="de"
    fetchBeforeRender={false}
  ></geov-entity>,
);
export const DateTimeYear = await stencilWrapper(
  <geov-entity
    sparqlEndpoint="https://sparql.geovistory.org/api_v1_project_924033"
    entityId="i609119"
    projectId={924033}
    uriRegex="(http://geovistory.org/resource/)(.*)"
    uriReplace="http://geovistory.org/resource/$2?p=924033"
    language="de"
    fetchBeforeRender={false}
  ></geov-entity>,
);
export const DateTimeMonth = await stencilWrapper(
  <geov-entity
    sparqlEndpoint="https://sparql.geovistory.org/api_v1_project_924033"
    entityId="i986993"
    projectId={924033}
    uriRegex="(http://geovistory.org/resource/)(.*)"
    uriReplace="http://geovistory.org/resource/$2?p=924033"
    language="de"
    fetchBeforeRender={false}
  ></geov-entity>,
);
export const DateTimeDay = await stencilWrapper(
  <geov-entity
    sparqlEndpoint="https://sparql.geovistory.org/api_v1_project_924033"
    entityId="i872676"
    projectId={924033}
    uriRegex="(http://geovistory.org/resource/)(.*)"
    uriReplace="http://geovistory.org/resource/$2?p=924033"
    language="de"
    fetchBeforeRender={false}
  ></geov-entity>,
);

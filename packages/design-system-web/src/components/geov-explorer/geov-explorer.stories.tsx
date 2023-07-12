import { h } from '@stencil/core';
import { stencilWrapper } from '../../helpers/stencilWrapper';
import { DEFAULT_SPARQL_ENDPOINT } from '../../../.storybook/config/defaulSparqlEndpoint';

export default {
  title: 'Data Components/Explorer/Explorer',
};

export const Explorer = stencilWrapper(<geov-explorer sparqlEndpoint={DEFAULT_SPARQL_ENDPOINT} preferredItems={['c21', 'c523']}></geov-explorer>);

export const ExplorerInitSearch = stencilWrapper(
  <geov-explorer sparqlEndpoint={DEFAULT_SPARQL_ENDPOINT} preferredItems={['c21', 'c523']} initSearchString="Anna Maria"></geov-explorer>,
);

export const ExplorerProject84760 = stencilWrapper(
  <geov-explorer
    sparqlEndpoint="https://sparql.geovistory.org/api_v1_project_84760"
    preferredItems={['c21', 'c523']}
    initSearchString="Jakarta"
    uriRegex="(http://geovistory.org/resource/)(.*)"
    uriReplace="http://geovistory.org/resource/$2?p=84760"
  ></geov-explorer>,
);

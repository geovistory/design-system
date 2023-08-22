import { h } from '@stencil/core';
import { DEFAULT_SPARQL_ENDPOINT } from '../../../.storybook/config/defaulSparqlEndpoint';
import { docsTemlpate } from '../../../.storybook/templates/docsTemplate';
import { stencilWrapper } from '../../../.storybook/lib/stencilWrapper';
import componentApi from './docs-component-api.md?raw';
import overview from './docs-overview.md?raw';
export default {
  title: 'Data Components/Helpers/If',
  tags: ['autodocs'],
  parameters: {
    viewMode: 'docs',
    docs: {
      page: () => docsTemlpate(overview, componentApi),
    },
  },
};

const query1 = `SELECT  ((1=1) as ?condition) WHERE {}`;
export const IfTrue = await stencilWrapper(
  <div>
    If you see a next line, if the condition of the sparqlQuery is met: <br />
    <geov-if sparqlEndpoint={DEFAULT_SPARQL_ENDPOINT} sparqlQuery={query1}>
      You see this line, because condition is met
    </geov-if>
  </div>,
);

const query2 = `SELECT  ((0=1) as ?condition) WHERE {}`;
export const IfFalse = await stencilWrapper(
  <div>
    If you see a next line, if the condition of the sparqlQuery is met: <br />
    <geov-if sparqlEndpoint={DEFAULT_SPARQL_ENDPOINT} sparqlQuery={query2}>
      You see this line, because condition is met
    </geov-if>
  </div>,
);

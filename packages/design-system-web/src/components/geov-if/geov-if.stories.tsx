import { h } from '@stencil/core';
import { stencilWrapper } from '../../helpers/stencilWrapper';
import { DEFAULT_SPARQL_ENDPOINT } from '../../../.storybook/config/defaulSparqlEndpoint';

export default {
  title: 'Data Components/Helpers/If',
};

const query1 = `SELECT  ((1=1) as ?condition) WHERE {}`;
export const IfTrue = stencilWrapper(
  <div>
    If you see a next line, if the condition of the sparqlQuery is met: <br />
    <geov-if sparqlEndpoint={DEFAULT_SPARQL_ENDPOINT} sparqlQuery={query1}>
      You see this line, because condition is met
    </geov-if>
  </div>,
);

const query2 = `SELECT  ((0=1) as ?condition) WHERE {}`;
export const IfFalse = stencilWrapper(
  <div>
    If you see a next line, if the condition of the sparqlQuery is met: <br />
    <geov-if sparqlEndpoint={DEFAULT_SPARQL_ENDPOINT} sparqlQuery={query2}>
      You see this line, because condition is met
    </geov-if>
  </div>,
);

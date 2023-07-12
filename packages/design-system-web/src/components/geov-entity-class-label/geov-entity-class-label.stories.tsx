import { h } from '@stencil/core';
import { stencilWrapper } from '../../helpers/stencilWrapper';
import { DEFAULT_SPARQL_ENDPOINT } from '../../../.storybook/config/defaulSparqlEndpoint';

export default {
  title: 'Data Components/Entity/EntityClassLabel',
};
export const EntityClassLabel = stencilWrapper(<geov-entity-class-label entityId="i315803" sparqlEndpoint={DEFAULT_SPARQL_ENDPOINT}></geov-entity-class-label>);

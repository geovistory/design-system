import { h } from '@stencil/core';
import { stencilWrapper } from '../../helpers/stencilWrapper';
import { DEFAULT_SPARQL_ENDPOINT } from '../../../.storybook/config/defaulSparqlEndpoint';

export default {
  title: 'Data Components/Entity/EntityDefinition',
};
export const EntityDefinition = stencilWrapper(<geov-entity-definition entityId="i3158616" sparqlEndpoint={DEFAULT_SPARQL_ENDPOINT}></geov-entity-definition>);
export const EntityDefinitionNotFound = stencilWrapper(
  <geov-entity-definition entityId="xyz" sparqlEndpoint={DEFAULT_SPARQL_ENDPOINT} emptyPlaceholder="No definition found"></geov-entity-definition>,
);

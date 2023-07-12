import { h } from '@stencil/core';
import { stencilWrapper } from '../../helpers/stencilWrapper';
import { DEFAULT_SPARQL_ENDPOINT } from '../../../.storybook/config/defaulSparqlEndpoint';

export default {
  title: 'Data Components/Entity/Entity Label',
};

export const EntityLabel = stencilWrapper(<geov-entity-label sparqlEndpoint={DEFAULT_SPARQL_ENDPOINT} entityId="i315800"></geov-entity-label>);
export const EntityLabelDataGiven = stencilWrapper(<geov-entity-label sparqlEndpoint={DEFAULT_SPARQL_ENDPOINT} entityId="i315800" _ssrId="8wrr2f"></geov-entity-label>);

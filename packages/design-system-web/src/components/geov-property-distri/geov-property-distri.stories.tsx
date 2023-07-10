import { h } from '@stencil/core';
import { stencilWrapper } from '../../helpers/stencilWrapper';
import { defineCustomElement } from '../../../dist/components/geov-property-distri';
defineCustomElement();

export default {
  title: 'Data Visualization Components/Property Distribution',
};

export const PropertyDistribution = stencilWrapper(
  <geov-property-distri sparqlEndpoint="https://sparql.geovistory.org/api_v1_community_data" width={500} height={500}></geov-property-distri>,
);

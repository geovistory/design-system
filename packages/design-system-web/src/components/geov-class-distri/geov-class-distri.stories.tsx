// geov-hello-world.stories.tsx
import { h } from '@stencil/core';
import { stencilWrapper } from '../../helpers/stencilWrapper';

export default {
  title: 'Data Visualization Components/Class Distribution',
};

export const ClassDistribution = stencilWrapper(
  <geov-class-distri sparqlEndpoint="https://sparql.geovistory.org/api_v1_community_data" width={500} height={500}></geov-class-distri>,
);

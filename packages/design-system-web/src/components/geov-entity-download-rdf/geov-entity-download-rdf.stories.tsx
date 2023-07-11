import { h } from '@stencil/core';
import { stencilWrapper } from '../../helpers/stencilWrapper';
import { defineCustomElements } from '../../../loader';
defineCustomElements();
export default {
  title: 'Data Components/Entity/Download RDF',
  tags: ['autodocs'],
};
export const EntityDownloadRdf = stencilWrapper(
  <geov-entity-download-rdf entityId="i785518" color="primary" expand="block" fill="outline" buttonLabel="Download RDF" buttonIcon="download-outline" />,
);
export const EntityDownloadRdf2 = stencilWrapper(
  <geov-entity-download-rdf entityId="i785518" color="warning" fill="outline" buttonLabel="Download" buttonIcon="download-sharp"></geov-entity-download-rdf>,
);

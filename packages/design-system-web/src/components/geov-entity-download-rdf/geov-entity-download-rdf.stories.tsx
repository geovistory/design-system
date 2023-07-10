import { h } from '@stencil/core';
import { stencilWrapper } from '../../helpers/stencilWrapper';
import { defineCustomElement } from '../../../dist/components/geov-entity-download-rdf';
defineCustomElement();
export default {
  title: 'Data Components/Entity/Download RDF',
};
export const EntityDownloadRdf = stencilWrapper(
  <geov-geov-entity-download-rdf
    entityId="i785518"
    color="primary"
    expand="block"
    fill="outline"
    buttonLabel="Download RDF"
    buttonIcon="download-outline"
  ></geov-geov-entity-download-rdf>,
);
export const EntityDownloadRdf2 = stencilWrapper(
  <geov-geov-entity-download-rdf entityId="i785518" color="warning" fill="outline" buttonLabel="Download" buttonIcon="download-sharp"></geov-geov-entity-download-rdf>,
);

import { h } from '@stencil/core';
import { stencilWrapper } from '../../helpers/stencilWrapper';
import { defineCustomElement } from '../../../dist/components/geov-code';
defineCustomElement();
export default {
  title: 'Data Components/Entity/Display Geosparql Wkliteral',
};
export const DisplayGeosparqlWktliteral = stencilWrapper(
  <geov-display-geosparql-wktliteral value="http://www.opengis.net/def/crs/EPSG/0/4326>POINT(4.79583 52.55417)"></geov-display-geosparql-wktliteral>,
);

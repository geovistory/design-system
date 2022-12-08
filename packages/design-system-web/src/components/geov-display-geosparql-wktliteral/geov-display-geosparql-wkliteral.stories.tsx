import React from 'react';
import { JSX } from '../..';
import { GeovDisplayGeosparqlWktliteral } from '../../../.storybook/stencil-generated/component';

export default {
  title: 'Data Components/Entity/Display Geosparql Wkliteral',
  component: GeovDisplayGeosparqlWktliteral,
};
const Template = (args: JSX.GeovDisplayGeosparqlWktliteral) => <GeovDisplayGeosparqlWktliteral {...args}></GeovDisplayGeosparqlWktliteral>;

export const DisplayGeosparqlWktliteral = Template.bind({});
const args: JSX.GeovDisplayGeosparqlWktliteral = {
  value: 'http://www.opengis.net/def/crs/EPSG/0/4326>POINT(4.79583 52.55417)',
};
DisplayGeosparqlWktliteral.args = args;

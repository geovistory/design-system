export const imports = `
import { Component, Host, h, Prop } from '@stencil/core';
import { SparqlBinding, sparqlJson } from '../../lib/sparqlJson';
import Plotly from 'plotly.js/dist/plotly-basic.min.js';
...`;

export const chartColors = `
...
const chartColors = [
    '#322659','#44337A','#553C9A','#6B46C1','#805AD5','#9F7AEA',
    '#B794F4','#D6BCFA','#E9D8FD','#FAF5FF','#E9D8FD','#D6BCFA',
    '#B794F4','#9F7AEA','#805AD5','#6B46C1','#553C9A','#44337A'
]
...
`;

export const sparqlQuery = `
...
const qrClassesCount = () => \`
  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

  SELECT (group_concat(?classname;separator=", ") as ?classnames) (Max(?classcount) as ?classcounts)
  WHERE {
      {
          SELECT ?classuri (count(?entity) as ?classcount)
          WHERE {
              ?entity a ?classuri .
          }
          GROUP BY ?classuri
      }
      ?classuri rdfs:label ?classname
  }
  GROUP BY ?classuri
  ORDER by DESC(?classcounts)
\`;
...
`;

export const responseType = `
...
type SparqlResponse = {
    classnames: SparqlBinding,
    classcounts: SparqlBinding
}
...
`;

export const componentCore = `
...

@Component({
    tag: 'geov-class-distri',
    styleUrl: 'geov-class-distri.css',
    shadow: false,
})
export class GeovClassDistri {

    ...

}
...
`;

export const parameters = `
...
/**
 * sparqlEndpoint
 * URL of the sparql endpoint
 */
@Prop() sparqlEndpoint: string;

/**
 * Size in pixel
 * of the final chart
 */
@Prop() width: number

/**
 * Size in pixel
 * of the final chart
 */
@Prop() height: number
...
`;

export const attribute = `
...
domId = 'class-distri-pie-chart';
...
`;

export const lifecycle = `
...
componentWillLoad() {

    ...

}
...
`;

export const sparqlExecution = `
...
// Send the request to the provided sparql endpoint
sparqlJson<SparqlResponse>(this.sparqlEndpoint, qrClassesCount()).then(res => {

    ...

});
...
`;

export const parseResponse = `
...
// Parse the response
const response = res?.results?.bindings
const labels = response.map(elt => elt.classnames.value)
const values = response.map(elt => parseInt(elt.classcounts.value))
...
`;

export const prepareColors = `
...
// Prepare colors
const colors = []
for(let i = 0; i < values.length; i++) {
  colors.push(chartColors[i % chartColors.length])
}
...
`;

export const chartParams = `
...
// Chart data, shape, and parameters
const plotlyData = [{
  labels: labels,
  values: values,
  type: 'pie',
  textinfo: 'label+percent',
  textposition: 'inside',
  marker: { colors: colors }
}]
...
`;

export const chartLayout = `
...
// Chart Layout - Prepare
const classNb = values.length;
const entNb_x1000 = Math.round(values.reduce((a: number, b: number) => a + b, 0) / 1000)

// Chart Layout - Set
const layout = {
  width: this.width,
  height: this.height,
  title: \`Distribution of \${classNb} classes (\${entNb_x1000}k entities)\`,
  showlegend: false
}
...
`;

export const drawChart = `
...
// Draw the chart
Plotly.newPlot(this.domId, plotlyData, layout)
...
`;

export const htmlTemplate = `
...
<Host>
    <div id={this.domId}></div>
    <slot></slot>
</Host>
...
`;

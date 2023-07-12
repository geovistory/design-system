import { Component, h, Host, Prop, State, Element } from '@stencil/core';
import { isNode } from '../../lib/isNode';
import { importPlotlyBasic } from '../../lib/importPlotlyBasic';
import { SparqlBinding, sparqlJson } from '../../lib/sparqlJson';

const chartColors = [
  '#322659',
  '#44337A',
  '#553C9A',
  '#6B46C1',
  '#805AD5',
  '#9F7AEA',
  '#B794F4',
  '#D6BCFA',
  '#E9D8FD',
  '#FAF5FF',
  '#E9D8FD',
  '#D6BCFA',
  '#B794F4',
  '#9F7AEA',
  '#805AD5',
  '#6B46C1',
  '#553C9A',
  '#44337A',
];

const qrClassesCount = () => `
  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

  SELECT (group_concat(?class;separator=", ") as ?classs) (Max(?classcount) as ?classcounts)
  WHERE {
      {
          SELECT ?classuri (count(?entity) as ?classcount)
          WHERE {
              ?entity a ?classuri .
          }
          GROUP BY ?classuri
      }
      ?classuri rdfs:label ?class
  }
  GROUP BY ?classuri
  ORDER by DESC(?classcounts)
`;

type SparqlResponse = {
  classs: SparqlBinding;
  classcounts: SparqlBinding;
};

@Component({
  tag: 'geov-class-distri',
  styleUrl: 'geov-class-distri.css',
  shadow: false,
})
export class GeovClassDistri {
  @Element() el: HTMLElement;
  /**
   * sparqlEndpoint
   * URL of the sparql endpoint
   */
  @Prop() sparqlEndpoint: string;

  /**
   * Size in pixel
   * of the final chart
   */
  @Prop() width: number;

  /**
   * Size in pixel
   * of the final chart
   */
  @Prop() height: number;

  @State() loading: boolean;

  async componentDidLoad() {
    // If we are in a browser
    if (!isNode()) {
      this.loading = true;
      // Load plotly script
      const Plotly = await importPlotlyBasic();

      // Send the request to the provided sparql endpoint
      sparqlJson<SparqlResponse>(this.sparqlEndpoint, qrClassesCount()).then(res => {
        // Parse the response
        const response = res?.results?.bindings;
        const labels = response.map(elt => elt.classs.value);
        const values = response.map(elt => parseInt(elt.classcounts.value));

        // Prepare colors
        const colors = [];
        for (let i = 0; i < values.length; i++) {
          colors.push(chartColors[i % chartColors.length]);
        }

        // Chart data, shape, and parameters
        const plotlyData: Plotly.Data[] = [
          {
            labels: labels,
            values: values,
            type: 'pie',
            textinfo: 'label+percent',
            textposition: 'inside',
            marker: { colors: colors },
          },
        ];

        // Chart Layout - Prepare
        const classNb = values.length;
        const entNb_x1000 = Math.round(values.reduce((a: number, b: number) => a + b, 0) / 1000);

        // Chart Layout - Set
        const layout = {
          width: this.width,
          height: this.height,
          title: `Distribution of ${classNb} classes (${entNb_x1000}k entities)`,
          showlegend: false,
        };

        // Draw the chart
        if (Plotly) Plotly.newPlot(this.el, plotlyData, layout);
        this.loading = false;
      });
    }
  }

  render() {
    return (
      <Host>
        {this.loading && (
          <div style={{ width: this.width + 'px', height: this.height + 'px' }} class="loading">
            <ion-spinner name="dots"></ion-spinner>
          </div>
        )}
      </Host>
    );
  }
}

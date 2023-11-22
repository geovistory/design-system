import { Component, h, Host, Prop } from '@stencil/core';
import Chart from 'chart.js/auto';
import 'chartjs-adapter-date-fns';
import ChartDataLabels from 'chartjs-plugin-datalabels';

type timespanData = {
  entityLabel: string;
  entityClassLabel: string;
  entityUri: string;
  startDate: string;
  endDate: string;
};

/**
 * This component displays a timeline of events.
 */
@Component({
  tag: 'geov-timeline-gantt',
  styleUrl: 'geov-timeline-gantt.css',
  shadow: true,
})
export class GeovTimelineGantt {
  el: HTMLCanvasElement;

  @Prop() data: timespanData[];

  @Prop() lineHeight: number = 20;

  componentDidLoad() {
    const ctx = this.el.getContext('2d');
    const chart = new Chart(ctx, {
      type: 'bar',
      data: {
        //labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: 'Timeline',
            data: this.data.map(item => ({ x: [item.startDate, item.endDate], y: item.entityLabel, name: item.entityClassLabel, entityUri: item.entityUri })),
            backgroundColor: ['rgba(122, 89, 199)'],
            borderColor: ['rgba(94, 62, 170)'],
            barPercentage: 1,
            borderSkipped: false,
            borderRadius: 10,
            minBarLength: 40,
          },
        ],
      },
      options: {
        plugins: {
          tooltip: {
            enabled: false,
          },
          datalabels: {
            formatter: context => {
              const label = context.y;
              return `${label}`;
            },
            color: 'white',
          },
        },
        indexAxis: 'y',
        scales: {
          x: {
            min: '2022',
            type: 'time',
            time: {
              unit: 'year',
            },
          },
          y: {
            beginAtZero: true,
          },
        },
      },
      plugins: [ChartDataLabels],
    });

    // Ajoutez un gestionnaire d'événements de clic pour détecter les clics sur les barres du graphique
    this.el.addEventListener('click', event => {
      const activeElements = chart.getElementsAtEventForMode(event, 'nearest', { intersect: true }, true);
      if (activeElements.length > 0) {
        const clickedElement = activeElements[0];
        const datasetIndex = clickedElement.datasetIndex;
        const index = clickedElement.index;
        const data = chart.data.datasets[datasetIndex].data[index];

        // Récupérez l'URL associée à l'élément cliqué et redirigez la page
        const entityUri = data.entityUri;
        window.open(entityUri, '_blank');
      }
    });
  }

  render() {
    return (
      <Host>
        <canvas id="myChart" height={this.data.length * this.lineHeight} ref={element => (this.el = element)}></canvas>
      </Host>
    );
  }
}

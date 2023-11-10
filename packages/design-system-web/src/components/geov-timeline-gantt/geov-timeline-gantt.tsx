import { Component, h, Host } from '@stencil/core';
import { Chart } from 'chart.js/auto';
import 'chartjs-adapter-date-fns';
import ChartDataLabels from 'chartjs-plugin-datalabels';

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

  componentDidLoad() {
    const ctx = this.el.getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        //labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: 'Timeline',
            data: [
              { x: ['2022-02-01', '2022-04-03'], y: 'event', name: 'essai1' },
              { x: ['2022-02-02', '2022-05-04'], y: 'event2', name: 'essai2' },
              { x: ['2022-02-03', '2022-08-07'], y: 'event3', name: 'essai3' },
              { x: ['2022-02-06', '2022-09-07'], y: 'event4', name: 'essai4' },
              { x: ['2022-12-08', '2023-04-12'], y: 'event5', name: 'essai5' },
              { x: ['2022-02-09', '2022-02-10'], y: 'event6', name: 'essai6' },
              { x: ['2022-02-09', '2022-02-13'], y: 'event7', name: 'essai7' },
            ],
            backgroundColor: [
              'rgba(255, 26, 104, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(0, 0, 0, 1)',
            ],
            borderColor: [
              'rgba(255, 26, 104, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(0, 0, 0, 1)',
            ],
            barPercentage: 0.9,
            borderSkipped: false,
            borderRadius: 10,
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
  }

  render() {
    return (
      <Host>
        <canvas id="myChart" ref={element => (this.el = element)}></canvas>
      </Host>
    );
  }
}

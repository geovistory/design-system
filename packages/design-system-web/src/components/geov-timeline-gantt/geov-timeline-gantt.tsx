import { Component, h, Host, Prop } from '@stencil/core';
import Chart from 'chart.js/auto';
import 'chartjs-adapter-date-fns';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import zoomPlugin from 'chartjs-plugin-zoom';

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
  axisCanvas: HTMLCanvasElement;

  @Prop() data: timespanData[];

  @Prop() lineHeight: number = 20;

  @Prop() barPercentage: number = 1;

  @Prop() backgroundColor: number[] = [122, 89, 199, 1];

  @Prop() borderColor: number[] = [94, 62, 170, 1];

  @Prop() borderWidth: number = 0;

  @Prop() minBarLength: number = 40;

  // Find the earliest date in the data
  getEarliestDate(data: timespanData[]) {
    // Initialization
    let earliestDate = new Date(data[0].startDate);

    for (let i = 1; i < data.length; i++) {
      const currentDate = new Date(data[i].startDate);
      if (currentDate < earliestDate) {
        earliestDate = currentDate;
      }
    }
    return earliestDate;
  }

  // Find the earliest date in the data
  getLatestDate(data: timespanData[]) {
    // Initialization
    let latestDate = new Date(data[0].endDate);

    for (let i = 1; i < data.length; i++) {
      const currentDate = new Date(data[i].endDate);
      if (currentDate > latestDate) {
        latestDate = currentDate;
      }
    }
    return latestDate;
  }

  // Compare two startDate
  compareStartDate(tsA: timespanData, tsB: timespanData) {
    const dateA = new Date(tsA.startDate).getTime();
    const dateB = new Date(tsB.startDate).getTime();
    return dateA - dateB;
  }

  // Sort by startDate
  sortByStartDate(data: timespanData[]) {
    data.sort(this.compareStartDate);
  }

  componentDidLoad() {
    // Sort by startDate
    this.sortByStartDate(this.data);
    const ctxMain = this.el.getContext('2d');
    const chartMain = new Chart(ctxMain, {
      type: 'bar',
      data: {
        datasets: [
          {
            label: 'Timeline',
            data: this.data.map(item => ({ x: [item.startDate, item.endDate], y: item.entityLabel, name: item.entityClassLabel, entityUri: item.entityUri })),
            backgroundColor: ['rgba(' + this.backgroundColor.join(',') + ')'],
            borderColor: ['rgba(' + this.borderColor.join(',') + ')'],
            borderWidth: this.borderWidth,
            barPercentage: this.barPercentage,
            minBarLength: this.minBarLength,
            borderSkipped: false,
            borderRadius: 10,
          },
        ],
      },
      options: {
        plugins: {
          zoom: {
            zoom: {
              wheel: {
                enabled: true,
              },
              mode: 'x',
            },
          },
          legend: {
            display: false,
          },
          tooltip: {
            enabled: true,
          },
          datalabels: {
            formatter: context => {
              const label = context.name + ', ' + context.y;
              return `${label}`;
            },
            color: 'white',
          },
        },
        indexAxis: 'y',
        scales: {
          x: {
            min: (this.getEarliestDate(this.data).getFullYear() - 10).toString(),
            max: (this.getLatestDate(this.data).getFullYear() + 10).toString(),
            type: 'time',
            time: {
              unit: 'year',
            },
            ticks: {
              stepSize: 2,
            },
          },
          y: {
            ticks: {
              display: false,
            },
            beginAtZero: true,
          },
        },
      },
      plugins: [ChartDataLabels, zoomPlugin],
    });

    // Click event handler to detect clicks on graph bars
    this.el.addEventListener('click', event => {
      const activeElements = chartMain.getElementsAtEventForMode(event, 'nearest', { intersect: true }, true);
      if (activeElements.length > 0) {
        const clickedElement = activeElements[0];
        const datasetIndex = clickedElement.datasetIndex;
        const index = clickedElement.index;
        const data = chartMain.data.datasets[datasetIndex].data[index];

        // Retrieve the URL associated with the clicked element and redirect the page
        const entityUri = data.entityUri;
        window.open(entityUri, '_blank');
      }
    });
  }

  resetZoom() {
    const chartMain = Chart.getChart(this.el);
    if (chartMain) {
      chartMain.resetZoom();
    }
  }

  render() {
    return (
      <Host>
        <ion-button onClick={() => this.resetZoom()}>Reset zoom</ion-button>
        <div class="scrollBox">
          <div class="scrollBoxBody">
            <canvas id="chartMain" height={this.data.length * this.lineHeight} ref={element => (this.el = element)}></canvas>
          </div>
        </div>
      </Host>
    );
  }
}

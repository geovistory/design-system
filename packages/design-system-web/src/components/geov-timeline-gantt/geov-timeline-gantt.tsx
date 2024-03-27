import { Component, h, Host, Prop } from '@stencil/core';
import type { Parser } from '@triply/yasr';
import Chart, { BarController, ChartDataset, ScaleOptions } from 'chart.js/auto';
import 'chartjs-adapter-date-fns';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import zoomPlugin from 'chartjs-plugin-zoom';

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
  elAxisX: HTMLCanvasElement;
  chartMain: Chart;
  chartAxisX: Chart;

  @Prop() data: Parser.Binding[] = [
    {
      entityLabel: { type: 'literal', value: 'Jakarta ID, Vlieland NL, Elburg' },
      entityClassLabel: { type: 'literal', value: 'Ship Voyage' },
      entityUri: { type: 'uri', value: 'http://geovistory.org/resource/i151562' },
      startDate: { type: 'literal', datatype: 'http://www.w3.org/2001/XMLSchema#date', value: '1666-01-30' },
      endDate: { datatype: 'http://www.w3.org/2001/XMLSchema#date', value: '1666-11-16', type: 'literal' },
    },
  ];

  @Prop() lineHeight: number = 30;

  @Prop() maxHeight: number = 200;

  @Prop() barPercentage: number = 1;

  @Prop() backgroundColor: number[] = [178, 160, 222, 1];

  @Prop() borderColor: number[] = [94, 62, 170, 1];

  @Prop() borderWidth: number = 0;

  @Prop() minBarLength: number = 10;

  @Prop() chartHeight: number = 240;

  // Find the earliest date in the data
  getEarliestDate(data: Parser.Binding[]) {
    // Initialization
    let earliestDate = new Date(data[0].startDate.value);

    for (let i = 1; i < data.length; i++) {
      const currentDate = new Date(data[i].startDate.value);
      if (currentDate < earliestDate) {
        earliestDate = currentDate;
      }
    }
    return earliestDate;
  }

  // Find the earliest date in the data
  getLatestDate(data: Parser.Binding[]) {
    // Initialization
    let latestDate = new Date(data[0].endDate.value);

    for (let i = 1; i < data.length; i++) {
      const currentDate = new Date(data[i].endDate.value);
      if (currentDate > latestDate) {
        latestDate = currentDate;
      }
    }
    return latestDate;
  }

  // Compare two startDate
  compareStartDate(dateBindingA: Parser.Binding, dateBindingB: Parser.Binding) {
    const dateA = new Date(dateBindingA.startDate.value).getTime();
    const dateB = new Date(dateBindingB.startDate.value).getTime();
    return dateA - dateB;
  }

  // Sort by startDate
  sortByStartDate(data: Parser.Binding[]) {
    data.sort(this.compareStartDate);
  }

  componentDidLoad() {
    // -- Patch to realign bars that are supposed to be "minBarLengthed".
    class CustomBar extends BarController {
      meta = this.getMeta();
      static minBarLength = 20;

      // Override draw() function.
      draw() {
        // For each bar
        this.meta.data.forEach(bar => {
          // If width of bar is less than minBarLength
          const actualWidth = Math.abs(Math.abs(bar.base) - Math.abs(bar.x)) * 2;
          if (actualWidth < CustomBar.minBarLength) {
            // Manage minBarLength here
            bar.base += (CustomBar.minBarLength - actualWidth / 2) / 2;
            bar.x -= (CustomBar.minBarLength - actualWidth / 2) / 2;
            bar.width = CustomBar.minBarLength;
          }
        });
        super.draw();
      }
    }
    CustomBar.id = 'customBar';
    CustomBar.defaults = BarController.defaults;
    CustomBar.minBarLength = this.minBarLength;
    Chart.register(CustomBar);
    // -- End patch

    // Sort by startDate
    this.sortByStartDate(this.data);

    type BarData = {
      x: number[];
      y: string;
      name: string;
      entityUri: string;
    };

    const chartData: ChartDataset<'bar', BarData[]>[] = [
      {
        label: 'Timeline',
        data: this.data.map(item => ({
          x: [new Date(item.startDate.value).getTime(), new Date(item.endDate.value).getTime() + 24 * 60 * 60 * 1000 - 1],
          y: item.entityLabel.value,
          name: item.entityClassLabel.value,
          entityUri: item.entityUri.value,
        })),
        backgroundColor: ['rgba(' + this.backgroundColor.join(',') + ')'],
        borderColor: ['rgba(' + this.borderColor.join(',') + ')'],
        borderWidth: this.borderWidth,
        barPercentage: this.barPercentage,
        borderSkipped: false,
        borderRadius: 10,
        // Normally we use minBarLength here but ChartJS generates the positioning of these bars incorrectly
        // See here: https://github.com/chartjs/Chart.js/issues/11667
        // In the meantime, this part is managed by CustomBar (See above)
        // minBarLength: this.minBarLength,
      },
    ];
    const scaleXHidden: ScaleOptions<'time'> = {
      display: true,
      offset: false,
      ticks: {
        display: true,
        minRotation: 0,
        maxRotation: 0,
      },
      grid: {
        display: true,
      },
      type: 'time',
      time: {
        unit: 'year',
      },
      min: new Date(this.getEarliestDate(this.data).getFullYear() + '-01-01').getTime(),
      max: new Date(this.getLatestDate(this.data).getFullYear() + '-12-31').getTime(),
    };
    const scaleXVisible = {
      ...scaleXHidden,
      ticks: {
        display: true,
        minRotation: 0,
        maxRotation: 0,
      },
      afterFit: ctx => {
        ctx.height += 24;
      },
    };

    const ctxMain = this.el.getContext('2d');
    this.chartMain = new Chart<'bar', BarData[]>(ctxMain, {
      type: 'customBar' as 'bar',
      data: {
        datasets: chartData,
      },
      options: {
        maintainAspectRatio: false, // https://www.chartjs.org/docs/latest/configuration/responsive.html#responsive-charts
        scales: {
          x: scaleXHidden,
          y: {
            grid: {
              display: true,
            },
            display: false,
          },
        },
        plugins: {
          zoom: {
            pan: {
              enabled: true,
              mode: 'x',
              onPan: function () {
                drawAxisX();
              },
              onPanComplete: function () {
                drawAxisX();
              },
            },
            zoom: {
              wheel: {
                enabled: false,
              },
              mode: 'x',
              onZoom: function (chart) {
                redrawTimeUnit(chart);
                drawAxisX();
              },
              onZoomComplete: function (chart) {
                redrawTimeUnit(chart);
                drawAxisX();
              },
            },
          },
          legend: {
            display: false,
          },
          tooltip: {
            enabled: true,
            callbacks: {
              label: function (tooltipItem) {
                const dataset = tooltipItem.dataset;
                const dataItem = dataset.data[tooltipItem.dataIndex];

                let dateLabel = '';
                if (typeof dataItem === 'object') {
                  if ('x' in dataItem) {
                    // For data in the format of {x: [startDate, endDate], y: label}
                    const startDate = new Date(dataItem.x[0]);
                    const endDate = new Date(dataItem.x[1]);
                    if (startDate.toDateString() === endDate.toDateString()) {
                      dateLabel = startDate.toISOString().split('T')[0];
                    } else {
                      dateLabel = startDate.toISOString().split('T')[0] + ' to ' + endDate.toISOString().split('T')[0];
                    }
                  }
                }
                return dateLabel;
              },
            },
          },
          datalabels: {
            display: true,
            color: 'black',
            formatter: function (value) {
              return value.name + ' : ' + value.y;
            },
            anchor: 'end',
            align: 'right',
            offset: 1,
          },
        },
        indexAxis: 'y',
      },
      plugins: [ChartDataLabels, zoomPlugin],
    });
    const _chartMain = this.chartMain;
    // Axis X
    const ctxAxisX = this.elAxisX.getContext('2d');
    this.chartAxisX = new Chart<'bar', BarData[]>(ctxAxisX, {
      type: 'customBar' as 'bar',
      data: {
        datasets: null,
      },
      options: {
        maintainAspectRatio: false, // https://www.chartjs.org/docs/latest/configuration/responsive.html#responsive-charts
        scales: {
          x: scaleXVisible,
          y: {
            display: false,
          },
        },
        indexAxis: 'y',
        plugins: {
          legend: {
            display: false,
          },
          zoom: {
            pan: {
              enabled: true,
              mode: 'x',
              onPan: function () {
                drawMain();
              },
              onPanComplete: function () {
                drawMain();
              },
            },
            zoom: {
              wheel: {
                enabled: false,
              },
              mode: 'x',
              onZoom: function (chart) {
                redrawTimeUnit(chart);
                drawMain();
              },
              onZoomComplete: function (chart) {
                redrawTimeUnit(chart);
                drawMain();
              },
            },
          },
        },
      },
      plugins: [ChartDataLabels, zoomPlugin],
    });
    const _chartAxisX = this.chartAxisX;

    function drawAxisX() {
      _chartAxisX.options.scales.x.min = _chartMain.options.scales.x.min;
      _chartAxisX.options.scales.x.max = _chartMain.options.scales.x.max;
      _chartAxisX.update();
    }

    function drawMain() {
      _chartMain.options.scales.x.min = _chartAxisX.options.scales.x.min;
      _chartMain.options.scales.x.max = _chartAxisX.options.scales.x.max;
      _chartMain.update();
    }

    function redrawTimeUnit(chart) {
      const scales = chart.chart.scales;
      _chartAxisX.options.scales.x.time.unit = determineTimeUnit(scales.x);
      _chartMain.options.scales.x.time.unit = determineTimeUnit(scales.x);
      _chartAxisX.update();
      _chartMain.update();
    }

    // Click event handler to detect clicks on graph bars
    this.el.addEventListener('click', event => {
      const activeElements = this.chartMain.getElementsAtEventForMode(event, 'nearest', { intersect: true }, true);
      if (activeElements.length > 0) {
        const clickedElement = activeElements[0];
        const datasetIndex = clickedElement.datasetIndex;
        const index = clickedElement.index;
        const data = this.chartMain.data.datasets[datasetIndex].data[index];

        // Retrieve the URL associated with the clicked element and redirect the page
        const entityUri = data.entityUri;
        window.open(entityUri, '_blank');
      }
    });

    function determineTimeUnit(scale) {
      if (scale.min && scale.max) {
        const diff = (scale.max - scale.min) / (1000 * 60 * 60 * 24); // Days difference (milliseconds)
        if (diff <= 60) {
          // moins de 31 jours, affiche par jour
          return 'day';
        } else if (diff > 60 && diff <= 365 * 5) {
          // moins de 4 années, affiche par mois
          return 'month';
        } else {
          // plus de 5 années, affiche par année
          return 'year';
        }
      }
      return 'year';
    }
  }

  resetZoom() {
    this.chartMain.resetZoom();
    this.chartAxisX.resetZoom();
  }

  zoomOut() {
    this.chartMain.zoom(0.5, 'zoom');
    this.chartAxisX.zoom(0.5, 'zoom');
  }
  zoomIn() {
    this.chartMain.zoom(1.3333, 'zoom');
    this.chartAxisX.zoom(1.3333, 'zoom');
  }

  render() {
    return (
      <Host>
        <div class="gantt-buttons">
          <ion-button size="small" onClick={() => this.resetZoom()}>
            Reset zoom
          </ion-button>
          <ion-button size="small" onClick={() => this.zoomOut()}>
            -
          </ion-button>
          <ion-button size="small" onClick={() => this.zoomIn()}>
            +
          </ion-button>
        </div>
        <div class="scroll-container">
          <div class="bar-chart">
            <div class="containerCanvas">
              <canvas id="chartMain" height={this.data.length * this.lineHeight} ref={element => (this.el = element)}></canvas>
            </div>
          </div>
          <div class="x-axis">
            <div class="containerCanvasAxis">
              <canvas id="chartAxisX" height={50} ref={element => (this.elAxisX = element)}></canvas>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}

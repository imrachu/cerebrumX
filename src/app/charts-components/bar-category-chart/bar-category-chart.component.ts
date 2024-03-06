import { Component, Input, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexStroke,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexTooltip,
  ApexTitleSubtitle,
  ChartComponent,
  ApexLegend,
  ApexGrid,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  tooltip: ApexTooltip;
  legend: ApexLegend;
  colors: string[];
  title: ApexTitleSubtitle;
  subtitle: ApexTitleSubtitle;
  grid:ApexGrid;
};

@Component({
  selector: 'app-bar-category-chart',
  templateUrl: './bar-category-chart.component.html',
  styleUrls: ['./bar-category-chart.component.css'],
})
export class BarCategoryChartComponent {
  @Input() chartData: any;

  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;

  constructor() {
  }
  ngOnInit(): void {
    console.log('chartData', this.chartData);
    this.chartOptions = {
      
      grid: {
        strokeDashArray: 7,
        show: true, // you can either change hear to disable all grids
        xaxis: {
          lines: {
            show:false, //or just here to disable only x axis grids
          },
        },
        yaxis: {
          lines: {
            show: true, //or just here to disable only y axis
            
          },
          
        },
      },
      series: [
        {
          data: this.chartData.data,
        },
      ],
      chart: {
        toolbar: {
          show: false,
        },
        type: 'bar',
        height: 300,
      },
      legend: {
        show: false,
      },
      plotOptions: {
        bar: {
          barHeight: '50px',
          startingShape: 'rounded',
          endingShape: 'rounded',
          columnWidth: '5px',
          distributed: true,
          horizontal: true,
        },
      },
      colors: this.chartData.colors,
      dataLabels: {
        enabled: true,
        textAnchor: 'start',
        style: {
          colors: ['#6C757E'],
          fontSize : '16',
          fontWeight : '100'
        },
        formatter: function (val: any, opt: any) {
          return val + '.0%';
        },
        offsetX: 140,
      },
      stroke: {
        width: 1,
        colors: ['#fff'],
      },
      xaxis: {
        categories: this.chartData.labels,
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
          position: 'left',
        },

      },
      tooltip: {
        theme: 'dark',
        x: {
          show: false,
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        y: {
          title: {
            formatter: function () {
              return '';
            },
          },
        },
      },
    };
  }
}

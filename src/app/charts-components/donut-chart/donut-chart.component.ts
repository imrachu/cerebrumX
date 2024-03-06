import { Component, Input, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexXAxis,
  ApexGrid,
  ApexLegend,
  ChartComponent,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  grid: ApexGrid;
  colors: string[];
  legend: ApexLegend;
};

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.css'],
})
export class DonutChartComponent {
  @Input() chartData: any;
  @ViewChild('chart') chart!: ChartComponent;
  public ChartOptions!: Partial<ChartOptions> | any;

  ngOnInit(): void {
    this.ChartOptions = {
      series: this.chartData.data,
      chart: {
        height: this.chartData.height,
        type: 'donut',
      },
      labels: this.chartData.categories,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 250,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
      colors: this.chartData.colors,
      plotOptions: {
        pie: {
          donut: {
            size : "75%"
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        position: 'bottom',
        horizontalAlign: 'left',
        fontSize: '14',
        markers: {
          offsetY: 100,
        },
        itemMargin: {
          horizontal: 10,
          vertical: 13,
        },
        formatter: function (val: any, opt: any) {
          return val + '</br>' + '<b style="font-size:20px; margin-left:15px">'+ opt.w.config.series[opt.seriesIndex] + '%' +'</b>';
        },
      },
    };
  }
}

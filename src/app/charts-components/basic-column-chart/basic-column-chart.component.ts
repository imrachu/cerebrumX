import { Component, Input, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexXAxis,
  ApexFill,
  ApexTooltip,
  ApexStroke,
  ApexLegend,
  ChartComponent,
  ApexGrid,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  colors: string[];
  legend: ApexLegend;
  grid:ApexGrid
};

@Component({
  selector: 'app-basic-column-chart',
  templateUrl: './basic-column-chart.component.html',
  styleUrls: ['./basic-column-chart.component.css'],
})
export class BasicColumnChartComponent {
  @Input() chartData: any;
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;
  legendDataLabel!:string[];

  ngOnInit(): void {
    this.chartOptions = {
      series: this.chartData.series,
      grid:{
        strokeDashArray: 7,
      },
      colors: this.chartData.colors,
      dataLabels: {
        enabled: false,
        enabledOnSeries: [3],
        textAnchor: 'start',
        style: {
          colors: ['#fff']
        },
        formatter: function (val:any, opt:any) {
          
          return   val + "%"
        },
        offsetX: 0,
        offsetY: 2,
        dropShadow: {
          enabled: true
        }
      },
      chart: {
        toolbar: {
          show: false,
        },
        type: 'bar',
        height: 400,
      },
      plotOptions: {
        bar: {
          
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded',

         
        },
      },
      
      stroke: {
        curve: 'smooth',
        show: true,
        width: 3,
        colors: ['transparent'],
      },
      legend:{
        formatter: function(seriesName: any, opts: any) {
         
          if (opts.seriesIndex === 0 ) {
           
            return seriesName  + '<span style="font-size:20px; margin-left:-3px; visibility:hidden;">'+ 1  +'</span>';
          } 
          else{
            return `<span style="">${seriesName}</span>`
          }
        },
        // return val + '</br>' + '<b style="font-size:20px; margin-left:15px">'+ opt.w.config.series[0]["data"][opt.seriesIndex] + '%' +'</b>'
        
       
        itemMargin: {
          horizontal: 0,
          vertical:45
          
      },
        horizontalAlign:'left',
        
        markers: {radius: 12,
          width: 8,
          height: 8,}
      },
      xaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        categories: this.chartData.categories,
      },
      yaxis: {},
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val: any) {
            return val + ' %';
          },
        },
      },
    };

this.legendDataLabel=[]
    for(let i = 0;i<5;i++){

      // console.log(this.chartData.series,this.chartData.series[0]["data"][i])
      let arr = [this.chartData.series[0]["data"][i],this.chartData.series[1]["data"][i],this.chartData.series[2]["data"][i],this.chartData.series[3]["data"][i]]
      const maxNumber = Math.max(...arr);
      // console.log(maxNumber)
      this.legendDataLabel.push(maxNumber+'.0'+'%')
    }
    // console.log(this.legendDataLabel)
  }
}

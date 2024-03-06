import { Component } from '@angular/core';

@Component({
  selector: 'app-sustainability-dashboard',
  templateUrl: './sustainability-dashboard.component.html',
  styleUrls: ['./sustainability-dashboard.component.css'],
})
export class SustainabilityDashboardComponent {
  chartData = {
    fuelConsumedData: {
      data: [460, 210, 290, 420, 610, 410],
      // backgrounddata:[],
      colors: [
        '#2CA87F',
        '#95D3BF',
        '#FA751A',
        '#FCBA8C',
        '#4680FF',
        '#C7D9FF',
      ],
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      legend: {
        show: false,
      },
      axisLabel: true,
      min: 0,
      max: 800,
      height: 250,

      tickAmount: 4,
      xaxisTitle: 'Months',
      yaxisTitle: 'Fuel cost in dollars',
      grid: true,
      markers: true,
    },
    fuelMileageData: {
      //basic-line-chart
      chartType: 'basic-line-chart',
      data: [13, 12, 11.05, 13.05, 10.0],
      categories: ["Nov'23", "Dec'23", "Jan'24", "Feb'24", "Mar'24"],
      colors: ['#4680FF'],
      min: 0,
      max: 35.0,
      tickAmount: 5,
      totalNumber: null,
      percentage: null,
      height: 200,
      xaxisTitle: 'Months',
      yaxisTitle: 'Fuel Mileage(mpg)',
      grid: false,
      markers: 0,
    },
    totalMilesDrivenData: {
      //basic-line-chart
      chartType: 'basic-line-chart',
      data: [210, 170, 400, 230, 520, 205],
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      colors: ['#4680FF'],
      min: 0,
      max: 800,
      tickAmount: 4,
      height: 250,
      curve: 'straight',
      xaxisTitle: 'Months',
      yaxisTitle: 'Fuel cost in dollars',
      grid: true,
      markers: 2,
    },
    fuelConsumptionData: {
      data: [33078, 41891, 51871, 47856, 33],
      // backgrounddata:[],
      colors: [
        '#2CA87F',
        '#95D3BF',
        '#FA751A',
        '#FCBA8C',
        '#4680FF',
        '#C7D9FF',
      ],
      categories: ["Nov'23", "Dec'23", "Jan'24", "Feb'24", "Mar'24"],
      legend: {
        show: false,
      },
      axisLabel: true,
      min: 0,
      max: 60000,
      height: 200,

      tickAmount: 4,
      xaxisTitle: 'Months',
      yaxisTitle: 'Fuel Consumed(gal)',
      grid: false,
      markers: true,
    },

    
    idlingDurationData: {
      //basic-line-chart
      chartType: 'column-line-chart',
      columnData: [1900, 2500, 5100, 3200, 0],
      lineData: [1.0, 1.2, 2.0, 5.2, 7.1],
      categories: ["Nov'23", "Dec'23", "Jan'24", "Feb'24", "Mar'24"],
      colors: ['#4680FF'],

      totalNumber: '13232:01',
      height: 200,
      xaxisTitle: 'Months',
      yaxisTitle1: 'Idling Duration(Hours)',
      yaxisTitle2: 'Idling Trip Duration(%)',
    },
  };
}

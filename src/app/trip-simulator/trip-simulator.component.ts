import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-trip-simulator',
  templateUrl: './trip-simulator.component.html',
  styleUrls: ['./trip-simulator.component.css'],
})
export class TripSimulatorComponent {
  @ViewChild('map')
  private mapContainer: ElementRef<HTMLElement> | any;
  speedObj = {
    minValue: 0,
    maxValue: 8,
    chartType: 'speed',
    value: 6
  };
  fuelObj = {
    minValue: 0,
    maxValue: 160,
    chartType: 'fuel',
    value: 150
  };
  distanceObj = {
    minValue: 0,
    maxValue: 1000,
    chartType: 'distance',
    value:300
  }
}

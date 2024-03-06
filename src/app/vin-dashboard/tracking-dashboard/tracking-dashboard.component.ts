import { Component } from '@angular/core';
import * as moment from "moment";

@Component({
  selector: 'app-tracking-dashboard',
  templateUrl: './tracking-dashboard.component.html',
  styleUrls: ['./tracking-dashboard.component.css']
})
export class TrackingDashboardComponent {
  public options: any = {
    locale: { format: 'DD/MM/YYYY' },
    ranges: {
      'Today': [moment(), moment()],
      'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
      'Last 7 Days': [moment().subtract(6, 'days'), moment()],
      'Last 30 Days': [moment().subtract(29, 'days'), moment()],
      'This Month': [moment().startOf('month'), moment().endOf('month')],
      'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
   },
   "alwaysShowCalendars": true,
  };
  trackingDateRange! : any;
  lat = 51.678418;
  lng = 7.809007;

  selectedDate(event : any){
    console.log(event);
    
  }
}

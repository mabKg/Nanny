import { Component, Input, OnInit } from '@angular/core';
import { Nanny } from '../../shared/nanny.model';

@Component({
  selector: 'app-nanny-detail-booking',
  templateUrl: './nanny-detail-booking.component.html',
  styleUrls: ['./nanny-detail-booking.component.css']
})
export class NannyDetailBookingComponent implements OnInit {

  @Input() price: number;

  daterange: any = {};

  constructor() { }

  ngOnInit() {
  }

  options: any = {
    locale: { format: 'YYYY-MM-DD' },
    alwaysShowCalendars: false,
    opens: 'left'
  };

  selectedDate(value: any, datepicker?: any) {
    // this is the date  selected
    console.log(value);

    // any object can be passed to the selected event and it will be passed back here
    datepicker.start = value.start;
    datepicker.end = value.end;

    // use passed valuable to update state
    this.daterange.start = value.start;
    this.daterange.end = value.end;
    this.daterange.label = value.label;
  }
}

import { Component, Input, OnInit, ViewContainerRef, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { Booking } from 'src/app/booking/booking.model';
import { HelperService } from 'src/app/common/service/helper.service';
import { BookingService } from '../../../booking/booking.service';
import { Nanny } from '../../shared/nanny.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { DaterangePickerComponent} from 'ng2-daterangepicker';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
// import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-nanny-detail-booking',
  templateUrl: './nanny-detail-booking.component.html',
  styleUrls: ['./nanny-detail-booking.component.css']
})
export class NannyDetailBookingComponent implements OnInit {

  @Input() nanny: Nanny;
  @ViewChild(DaterangePickerComponent,{static: false }) 
  private picker: DaterangePickerComponent;

  @ViewChild('bookingNoteTitle',{static: true }) 
  private somePTag: ElementRef;
  

  newBooking: Booking;
modalRef: any;
  daterange: any = {};
  bookedOutDates: any[] = [];
errors: any[];
messages: any;
  options: any = {
    locale: { format: Booking.DATE_FORMAT  },
    alwaysShowCalendars: false,
    opens: 'left',
    autoUpdateInput: false,
    isInvalidDate: this.checkForInvalidDates.bind(this)
  };

  constructor(private helper: HelperService, 
    private modalService: NgbModal,
    private bookingService: BookingService,
    // private toastr: ToastsManager,
    // private vcr: ViewContainerRef
    )
     { 
      
     }

  ngOnInit() {
    this.newBooking = new Booking();
    this.getBookedOutDates();

    this.somePTag.nativeElement.style.color = "red";
  }

  private checkForInvalidDates(date) {
    return this.bookedOutDates.includes(this.helper.FormatBookingDate(date)) || date.diff(moment(), 'days') < 0;
  }

private getBookedOutDates() {
const bookings: Booking[] = this.nanny.bookings

if (bookings && bookings.length > 0) {
    bookings.forEach((booking: Booking) => {
      const dateRange = this.helper.getBookingRangeOfDates(booking.startAt, booking.endAt);
      this.bookedOutDates.push(...dateRange);
      });
  }
}

private addNewBookedDates(bookingData: any) {
  const dateRange = this.helper.getBookingRangeOfDates(bookingData.startAt, bookingData.endAt);
  this.bookedOutDates.push(...dateRange);
}

private resetDatePicker(){
this.picker.datePicker.setStartDate(moment());
this.picker.datePicker.setEndDate(moment());
this.picker.datePicker.element.val('');
}

openConfirmModal(content) {
  this.errors = [];
  this.modalRef = this.modalService.open(content);

  this.picker.datePicker;
}

createBooking() {
  this.newBooking.nanny = this.nanny;
this.bookingService.createBooking(this.newBooking).subscribe(
  (bookingData: any) => {
    this.addNewBookedDates(bookingData);
this.newBooking = new Booking();
this.modalRef.close();
this.resetDatePicker();
// this.getBookedOutDates.success('Booking has been successfully created, check your booking detail in manage section', 'Success!');
  },
(errorResponse: any) => {
this.errors = errorResponse.error.errors;

}
)
}
  selectedDate(value: any, datepicker?: any) {
    this.options.autoUpdateInput = true;
    this.newBooking.startAt = this.helper.FormatBookingDate(value.start);
    this.newBooking.endAt = this.helper.FormatBookingDate(value.end);
    this.newBooking.days = -(value.start.diff(value.end, 'days'));
    this.newBooking.totalPrice = this.newBooking.days * this.nanny.rate;
    
    
  }
}

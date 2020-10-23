import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Booking } from 'src/app/booking/booking.model';

@Injectable()
export class HelperService {

    public getRangeOfDates(startAt, endAt, dateFormat){
        const tempDates = [];
        const mendAt = moment(endAt);
        let mStartAt = moment(startAt);

        while(mStartAt < mendAt) {
            tempDates.push(mStartAt.format(dateFormat));
            mStartAt = mStartAt.add(1, 'day');
        }

        tempDates.push(moment(startAt).format(dateFormat));
        tempDates.push(mendAt.format(dateFormat));

        return tempDates;
    }

    private formatDate(date, dateFormat) {
        return moment(date).format(dateFormat);
    }

    public FormatBookingDate(date){
    return this.formatDate(date, Booking.DATE_FORMAT);
    }

    public getBookingRangeOfDates(startAt, endAt) {
        return this.getRangeOfDates(startAt, endAt, Booking.DATE_FORMAT)
    }
}
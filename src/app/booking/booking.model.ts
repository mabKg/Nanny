import { Nanny } from '../nanny/shared/nanny.model';

export class Booking {

    static readonly DATE_FORMAT = 'Y-MM-DD';

    _id: string;
    startAt: string;
    endAt: string;
    totalPrice: number;
    days: number;
    kids: number;
    createdAt: string;
    nanny: Nanny;
}
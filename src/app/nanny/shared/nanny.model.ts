import { Booking } from 'src/app/booking/booking.model';

export class Nanny {
_id: string;
firstName: string;
lastName: string;
idNumber: string;
image: string;
age: number;
gender: string;
cell: string;
email: string;
city: string;
streetName: string;
province: string;
hobbies: string;
type: string;
rate: number;
health: string;
church: string;
qualification: string;
criminalRecord: boolean;
criminalDescription: string;
yearsOfExperience: number;
kidsAges: string;
referenceName: string;
referenceNumber: string;
createdAt: string;
bookings: Booking[]
}



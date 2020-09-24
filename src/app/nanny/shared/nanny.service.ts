import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { Nanny } from './nanny.model';
@Injectable()
export class NannyService {
  private nannies: Nanny[] = [{
    id: '1',
    firstName: 'Lebogang' ,
    lastName: 'Koloti',
    idNumber: '08876776878768',
    image: 'http://via.placeholder.com/350*250',
    age: 25,
    gender: 'Female',
    cell: '08376473778',
    email: 'mab@gmail.com',
    city: 'johannesburg',
    province: 'Gauteng',
    hobbies: 'i like playing with kids',
    type: 'stay In',
    rate: 200,
    health: 'Good',
    church: 'Impact',
    qualification: 'Child care and CPR',
    criminalRecord: true,
    criminalDescription: '',
    yearsOfExperience: 3,
    kidsAges: '1-2,3-4,5-6',
    referenceName: 'mabatho',
    referenceNumber: '0845677877',
    createdAt: '02-04-2020'

  },
  {
    id: '2',
    firstName: 'Lebogang' ,
    lastName: 'Koloti',
    idNumber: '08876776878768',
    image: 'http://via.placeholder.com/350*250',
    age: 25,
    gender: 'Female',
    cell: '08376473778',
    email: 'mab@gmail.com',
    city: 'johannesburg',
    province: 'Gauteng',
    hobbies: 'i like playing with kids',
    type: 'stay In',
    rate: 200,
    health: 'Good',
    church: 'Impact',
    qualification: 'Child care and CPR',
    criminalRecord: true,
    criminalDescription: '',
    yearsOfExperience: 3,
    kidsAges: '1-2,3-4,5-6',
    referenceName: 'mabatho',
    referenceNumber: '0845677877',
    createdAt: '02-04-2020'

  },
  {
    id: '3',
    firstName: 'Lebogang' ,
    lastName: 'Koloti',
    idNumber: '08876776878768',
    image: 'http://via.placeholder.com/350*250',
    age: 25,
    gender: 'Female',
    cell: '08376473778',
    email: 'mab@gmail.com',
    city: 'johannesburg',
    province: 'Gauteng',
    hobbies: 'i like playing with kids',
    type: 'stay In',
    rate: 200,
    health: 'Good',
    church: 'Impact',
    qualification: 'Child care and CPR',
    criminalRecord: true,
    criminalDescription: '',
    yearsOfExperience: 3,
    kidsAges: '1-2,3-4,5-6',
    referenceName: 'mabatho',
    referenceNumber: '0845677877',
    createdAt: '02-04-2020'
},
  {
    id: '4',
    firstName: 'Lebogang' ,
    lastName: 'Koloti',
    idNumber: '08876776878768',
    image: 'http://via.placeholder.com/350*250',
    age: 25,
    gender: 'Female',
    cell: '08376473778',
    email: 'mab@gmail.com',
    city: 'johannesburg',
    province: 'Gauteng',
    hobbies: 'i like playing with kids',
    type: 'stay In',
    rate: 200,
    health: 'Good',
    church: 'Impact',
    qualification: 'Child care and CPR',
    criminalRecord: true,
    criminalDescription: '',
    yearsOfExperience: 3,
    kidsAges: '1-2,3-4,5-6',
    referenceName: 'mabatho',
    referenceNumber: '0845677877',
    createdAt: '02-04-2020'
  }];

public getNannyById(nannyId: string): Observable<Nanny> {
  return new Observable<Nanny>((observer) => {
    setTimeout(() => {
      const foundNanny = this.nannies.find((nanny) =>{
return nanny.id === nannyId;
      });
      observer.next(foundNanny);
    }, 500);
  });
}

  public getNanny(): Observable<Nanny[]> {
    return  new Observable<Nanny[]>((observer) => {

setTimeout(() => {
  observer.next(this.nannies);
}, 1000);
});
}
}

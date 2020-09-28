
const Nanny = require('./models/nanny');

class FakeDb {
    constructor() {
        this.Nannies = [{
        firstName: 'Lebogang' ,
    lastName: 'Koloti',
    idNumber: '0887677687876',
    image: 'http://via.placeholder.com/350*250',
    age: 25,
    gender: 'Female',
    cell: '08376473778',
    email: 'mab@gmail.com',
    city: 'johannesburg',
    province: 'Gauteng',
    hobbies: 'i like playing with kids',
    type: 'stay In',
    rate: 2000,
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
        {firstName: 'mamsi' ,
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
        rate: 200.00,
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
            },]
    }

    async cleanDb(){
       await Nanny.deleteMany({});
    }
    pushNannyToDb() {
        this.Nannies.forEach((nanny) => {
            const newNanny = new Nanny(nanny);

            newNanny.save();
        })
    }

    seedDb() {
        this.cleanDb();
        this.pushNannyToDb();
    }
}

module.exports = FakeDb;
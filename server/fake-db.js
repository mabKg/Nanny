
const Nanny = require('./models/nanny');
const User = require('./models/user');
const Booking = require('./models/booking');
class FakeDb {
    constructor() {
        this.Nannies = [{
        firstName: 'Lebogang' ,
    lastName: 'Koloti',
    idNumber: '0887677687876',
    image: 'https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg',
    age: 25,
    gender: 'Female',
    cell: '08376473778',
    email: 'mab@gmail.com',
    city: 'johannesburg',
    streetName: 'Commissioner',
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
        image: 'https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg',
        age: 25,
        gender: 'Female',
        cell: '08376473778',
        email: 'mab@gmail.com',
        city: 'johannesburg',
        streetName: 'Commissioner',
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
            },
            {firstName: 'mamsi' ,
            lastName: 'Koloti',
            idNumber: '08876776878768',
            image: 'https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg',
            age: 25,
            gender: 'Female',
            cell: '08376473778',
            email: 'mabs@gmail.com',
            city: 'johannesburg',
            streetName: 'Commissioner',
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
                },
                {firstName: 'mamsi' ,
                lastName: 'Koloti',
                idNumber: '08876776878768',
                image: 'https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg',
                age: 25,
                gender: 'Female',
                cell: '08376473778',
                email: 'thaps@gmail.com',
                city: 'johannesburg',
                streetName: 'Commissioner',
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
                    }];

            this.users = [{
                username: "Test User",
                email: "test@gmail.com",
                password: "testtest"
            }, {
                username: "mabs",
                email: "mabs@gmail.com",
                password: "mabs01"
            }];
    }

    async cleanDb(){
        await User.remove({});
       await Nanny.remove({});
       await Booking.remove({})
       
    }
    pushDataToDb() {
        const user = new User(this.users[0]);
        const user2 = new User(this.users[1]);

        this.Nannies.forEach((nanny) => {
            const newNanny = new Nanny(nanny);
            newNanny.user = user;

            user.Nannies.push(newNanny);
            newNanny.save();
        });
        user.save();
        user2.save();
    }

   async seedDb() {
       await this.cleanDb();
        this.pushDataToDb();
    }
}

module.exports = FakeDb;
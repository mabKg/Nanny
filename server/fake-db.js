
const Nanny = require('./models/nanny');
const User = require('./models/user');
const Booking = require('./models/booking');

const fakeDbData = require('./data.json');


class FakeDb {
    constructor() {
        this.Nannies = fakeDbData.nannies;
        this.users = fakeDbData.users;
    }

    async cleanDb(){
        await User.deleteMany({});
       await Nanny.deleteMany({});
       await Booking.remove({});
       
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
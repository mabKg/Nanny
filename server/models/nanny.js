const mongoose = require('mongoose');
const { schema } = require('./booking');
const Schema = mongoose.Schema;

const nannySchema = new Schema({
   
firstName: { type: String, required: true, max: [128, 'too long, max is 128 characters']},
lastName: { type: String, required: true, max: [128, 'too long, max is 128 characters']},
idNumber: { type: String, required: true},
image: { type: String, required: true},
age: { type: Number, required: true},
gender: { type: String, required: true},
cell: { type: String, required: true, max: [10, 'too long, max is 10 characters']},
email: { type: String, required: true, max: [128, 'too long, max is 128 characters']},
city: { type: String, required: true, lowercase: true},
streetName: { type: String, required: true, lowercase: true},
province: { type: String, required: true, lowercase: true},
hobbies: { type: String, required: true},
type: { type: String, required: true, lowercase: true},
rate: { type: Number, required: true},
health: { type: String, required: true},
church: { type: String, required: true},
qualification: { type: String, required: true},
criminalRecord: { type: Boolean, required: true},
criminalDescription: { type: String, required: false},
yearsOfExperience: { type: Number, required: true},
kidsAges: { type: String, required: true},
referenceName: { type: String, required: true},
referenceNumber: { type: String, required: true},
createdAt: { type: Date, default: Date.now },
 user: { type: Schema.Types.ObjectId, ref: 'User' },
 bookings: [{ type: Schema.Types.ObjectId, ref: 'Booking' }]
});

module.exports = mongoose.model('Nanny', nannySchema);
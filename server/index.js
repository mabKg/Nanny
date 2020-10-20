const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/dev');
const Nanny = require('./models/nanny');
const FakeDb = require('./fake-db');
const nannyRoutes = require('./routes/nannies'),
 userRoutes = require('./routes/users'),
 bookingRoutes = require('./routes/bookings')
 ;
mongoose.connect(config.DB_URI).then(() => {
    const fakeDb = new FakeDb();
    //fakeDb.seedDb();
});

const app = express();
app.use(bodyParser.json());
app.use('/api/v1/nannies', nannyRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/bookings', bookingRoutes);

const PORT = process.env.PORT || 3005;
app.listen(PORT, function(){
    console.log('I am running');
});
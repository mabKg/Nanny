const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev');
const Nanny = require('./models/nanny');
const FakeDb = require('./fake-db');
const nannyRoutes = require('./routes/nannies');

mongoose.connect(config.DB_URI).then(() => {
    const fakeDb = new FakeDb();
    fakeDb.seedDb();
});

const app = express();

app.use('/api/v1/nannies', nannyRoutes);
//const PORT = process.env.PORT || 3001;

app.listen(3005, function(){
    console.log('I am running');
});
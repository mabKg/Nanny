const express = require('express');
const router = express.Router();
const Nanny = require('../models/nanny');
const User = require('../models/user');
const { normalizeErrors } = require('../helpers/mongoose');
const UserCtrl = require('../controllers/user');
const booking = require('../models/booking');

router.get('/secret',UserCtrl.authMiddleware, function(req, res) {
    res.json({"secret": true});
});

router.get('/:id', function(req, res) {
    const nannyId = req.params.id;

    Nanny.findById(nannyId)
    .populate('user', 'username -_id')
    .populate('bookings', 'startAt endAt -_id')
    .exec(function(err, foundNanny) {
        if (err) {
            res.status(422).send({errors: [{title: 'Nanny Error', detail: 'Could not find Nanny'}]});
        }
        res.json(foundNanny);
    });
});

router.post('', UserCtrl.authMiddleware, function(req, res) {
    const { firstName, lastName, idNumber, image, age, gender, cell, email, city, streetName, province, hobbies, type, rate, health, church,
        qualification, criminalRecord, criminalDescription, yearsOfExperience, kidsAges, referenceName, referenceNumber, createdAt } = req.body;
    const user = res.locals.user;

    const nanny = new Nanny({firstName, lastName, idNumber, image, age, gender, cell, email, city, streetName, province, hobbies, type, rate, health, church,
        qualification, criminalRecord, criminalDescription, yearsOfExperience, kidsAges, referenceName, referenceNumber, createdAt});
        nanny.user = user;

        Nanny.create(nanny, function(err, newNanny) {
            if (err) {
                return res.status(422).send({errors: normalizeErrors(err.errors)});
            }

            User.update({_id:user.id}, { $push: {nanny: newNanny}}, function(){});

            return res.json(newNanny);
        })
})

router.get('', function(req, res) {
    const city = req.query.city;
    const query = city ? {city: city.toLowerCase()} : {};

    Nanny.find(query)
    .select('-bookings')
    .exec(function(err, foundNanny) {
        if (err) {
            return res.status(422).send({errors: normalizeErrors(err.errors)});
       }

       if (city && foundNanny.length === 0) {
        return res.status(422).send({errors: [{title: 'No Nanny Found', detail: `There are no Nannies for city ${city}`}]});  
       }
       return res.json(foundNanny);
    });

    });

module.exports = router;
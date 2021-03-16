const express = require('express');
const router = express.Router();
const Nanny = require('../models/nanny');
const { normalizeErrors } = require('../helpers/mongoose');

const UserCtrl = require('../controllers/user');

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


router.get('', function(req, res) {
const city = req.query.city;
const query = city ? {city: city.toLowerCase()} : {};


// if (city) {
//     Nanny.find({city: city.toLowerCase()})
//     .select('-bookings')
//     .exec(function(err, filteredNanny) {
// if (err) {
//     return res.status(422).send({errors: normalizeErrors(err.errors)}); 
// }
// if (filteredNanny.length === 0) {
//     res.status(422).send({errors: [{title: 'No nanny found', detail: `There are no nanny for this city ${city}`}]});
// }
// return res.json(filteredNanny);
//     })
   
// } 
// if (age){
//     Nanny.find({age: age})
//     .select(city)
//     .exec(function(err,filteredNanny) {
//         if (err) {
//             return res.status(422).send({errors: normalizeErrors(err.errors)}); 
//         }
//         if (filteredNanny.length === 0) {
//             res.status(422).send({errors: [{title: 'No nanny found', detail: `There are no nanny for this city ${city}`}]});
//         }
//         return res.json(filteredNanny);
//             })

// }

// else {

    Nanny.find(query)
    .select('-bookings')
    .exec(function(err, foundNanny) {

if (err) {
    return res.status(422).send({errors: normalizeErrors(err.errors)}); 
}
if (city && foundNanny.length === 0) {
                res.status(422).send({errors: [{title: 'No nanny found', detail: `There are no nanny for this city ${city}`}]});
            }
        res.json(foundNanny);
    });

 });

module.exports = router;
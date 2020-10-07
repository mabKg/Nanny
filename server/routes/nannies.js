const express = require('express');
const router = express.Router();
const Nanny = require('../models/nanny');

const UserCtrl = require('../controllers/user');

router.get('/secret',UserCtrl.authMiddleware, function(req, res) {
    res.json({"secret": true});
});

router.get('', function(req, res) {
    Nanny.find({}, function(err, foundNannies) {
        res.json(foundNannies);
    })
});

router.get('/:id', function(req, res) {
    const nannyId = req.params.id;

    Nanny.findById(nannyId, function(err, foundNanny) {
        if (err) {
            res.status(422).send({errors: [{title: 'Nanny Error', detail: 'Could not find Nanny'}]});
        }
        res.json(foundNanny);
    })
})

module.exports = router;
const Booking = require('../models/booking');
const Nanny = require('../models/nanny');
const User = require('../models/user');
const { normalizeErrors } = require('../helpers/mongoose');
const nanny = require('../models/nanny');

exports.createBooking = function(req, res) {
    const { startAt, endAt, totalPrice, kids, days, nanny } = req.body;
    const user = res.locals.user;

    const booking = new Booking({ startAt, endAt, totalPrice,kids, days });

    Nanny.findById(nanny._id)
    .populate('bookings')
    .populate('user')
    .exec(function(err, foundNanny) {

        if (err) {
            return res.status(422).send({errors: normalizeErrors(err.errors)});
        }

        if (foundNanny.user.id === user.id) {
            return res.status(422).send({errors: [{title: 'Invalid User!', detail: 'Cannot create booking on your self'}]});
        }

        if (isValidBooking(booking, foundNanny)) {
            booking.user = user;
            booking.nanny = foundNanny;
            foundNanny.bookings.push(booking);
            
            booking.save(function(err) {
                if (err) {
                    return res.status(422).send({errors: normalizeErrors(err.errors)}); 
                }
            
            foundNanny.save()
            User.update({_id: user.id}, {$push: {bookings: booking}}, function(){});
        
            return res.json({startAt: booking.startAt, endAt: booking.endAt});
        } );
    }
        else {
            return res.status(422).send({errors: [{title: 'Invalid Booking', detail: 'Chosen date are already taken!'}]});
        }
    })
}

function isValidBooking(proposedBooking, nanny){
    let isValid = true;

    if (nanny.bookings && nanny.bookings.length > 0) {

      isValid = nanny.bookings.every(function(booking) {
      const proposedStart = proposedBooking.startAt;
      const proposedEnd = proposedBooking.endAt;

      const actualStart = booking.startAt;
      const actualEnd = booking.endAt;

      return ((actualStart < proposedStart && actualEnd < proposedStart) || (proposedEnd < actualEnd && proposedEnd < actualStart));
           
        });
    }

return isValid;
}
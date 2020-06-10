//jshint esversion:6
const Cart = require('../models/Cart');

module.exports = function(req, res, next) {
  Cart.findOne({ owner: req.session.userId }, function(err, foundCart) {
    foundCart.items.pull(String(req.body.item));

    foundCart.total = (foundCart.total - parseFloat(req.body.price)).toFixed(2);
    foundCart.save(function(err, found) {
      if (err) return next(err);
      req.flash('remove', 'Successfully removed');
      res.redirect('/cart');
    });
  });
};

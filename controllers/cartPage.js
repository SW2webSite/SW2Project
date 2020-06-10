//jshint esversion:6
const Cart = require('../models/Cart');

module.exports = function(req, res, next) {
  Cart
    .findOne({ owner: req.session.userId })
    .populate('items.item')
    .exec(function(err, foundCart) {
      if (err) return next(err);
      res.render('cart', {
        foundCart: foundCart,
        message: req.flash('remove')
      });
    });
};

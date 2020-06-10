var Cart = require('../models/Cart');

module.exports = function(req, res, next) {

  if (req.session.userId) {
    var total = 0;
    Cart.findOne({ owner: req.session.userId }, function(err, cart) {
      if (cart) {
        for (var i = 0; i < cart.items.length; i++) {
          total += cart.items[i].quantity;
        }
        res.locals.cart = total;
      } else {
        res.locals.cart = 0;
      }
      next();
    });
  } else {
    next();
  }
};

const Product = require('../models/Product');

module.exports = function(req, res, next) {
  Product.findById({ _id: req.params.id }, function(err, product) {
    if (err) return next(err);
    res.render('single-product', {
      product: product
    });
  });
};

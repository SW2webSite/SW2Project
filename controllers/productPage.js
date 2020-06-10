//jshint esversion:6
const Product = require('../models/Product');

module.exports = async function(req, res, next) {
  try{
    var perPage = 9;
    var page = req.params.page || 1;
    await Product
        .find({})
        .skip((perPage * page) - perPage)
        .limit(perPage)
        .populate('category')
        .exec(function(err, products) {
            Product.count().exec(function(err, count) {
                if (err) return next(err);
                return res.render('products', {
                    products: products,
                    current: page,
                    pages: Math.ceil(count / perPage),
                });
            });
        });
  }catch(err){
    console.log(err);
  }
}

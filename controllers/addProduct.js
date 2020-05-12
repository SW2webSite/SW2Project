//jshint esversion:6
const Product = require('../models/Product');

module.exports = function(req, res){
  Product.create({
    name: req.body.productName,
    price: req.body.productPrice,
    description: req.body.productDescription,
    category: req.body.productCategory,
    owner: req.session.userId,
  }, function(error, prod){
    if(error){
      console.log(error);
      const productAuth = Object.keys(error.errors).map(key => error.errors[key].message);
      req.session.productAuth = productAuth;
      req.flash('productAddErrors', productAuth);
      req.flash('productData', req.body);
      return res.redirect('/addProduct');
    }else{
      productAuth = "Product Added Successfully.";
      req.session.productAuth = productAuth;
      req.flash('productAddSuccess', productAuth);
      return res.redirect('/addProduct');
    }
    });
};

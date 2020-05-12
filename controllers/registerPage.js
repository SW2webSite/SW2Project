//jshint esversion:6
const Category = require('../models/Category');

module.exports = async function(req, res){
  try{
    const Categories = await Category.find({});
    res.render('Register', {
      Categories: Categories,
      errors: req.flash('registerationErrors'),
      data: req.flash('data')[0]
    });
  }catch(err){
    console.log(err);
  }
}

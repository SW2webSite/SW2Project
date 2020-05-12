//jshint esversion:6
const Category = require('../models/Category');

module.exports = async function(req, res){
  try{
    const Categories = await Category.find({});
    res.render('addCategory', {
      Categories: Categories,
      catSuccess: req.flash('categoryAddSuccess'),
      catErrors: req.flash('categoryAddErrors'),
      catData: req.flash('catData')[0]
    });
  }catch(err){
    console.log(err);
  }
}

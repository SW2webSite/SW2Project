//jshint esversion:6
const Category = require('../models/Category');
module.exports = async function(req, res){
  try{
    const Categories = await Category.find({});
    res.render('product', {
      Categories: Categories
    });
  }catch(err){
    console.log(err);
  }
}

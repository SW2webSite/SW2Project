//jshint esversion:6
const Category = require('../models/Category');
module.exports = async function(req, res){
  console.log(req.session);
  try{
    const Categories = await Category.find({});
    res.render('home', {
      Categories: Categories
    });
  }catch(err){
    console.log(err);
  }
}

//jshint esversion:6
const Category = require('../models/Category');

module.exports = async function(req, res, next) {
  try{
    const Categories = await Category.find({});
    if(Categories){
      res.locals.Categories = Categories;
    }else{
      next();
    }
  }catch(err){
    console.log(err);
  }
  next();
}

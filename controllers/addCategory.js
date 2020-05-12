//jshint esversion:6
const Category = require('../models/Category');
var _ = require('lodash');
var path = require('path');

module.exports = function(req, res){
  console.log(req.file);
  cat_name = (req.body.categoryName).toLowerCase();
  const {image} = req.file;
    Category.find({name: cat_name}, function(err, doc){
      if(doc.length){
        req.flash('categoryAddErrors', cat_name + ' Already Exists!');
        req.flash('categoryData', req.body);
        return res.redirect('/addCategory');
      }else{
        category = Category.create({
          name: cat_name,
          img: '/image/' + req.file.originalname,
          description: req.body.categoryDescription
        }, function(error, category){
          if(error){
            const categoryAddErrors = Object.keys(error.errors).map(key => error.errors[key].message);
            req.session.categoryAddErrors = categoryAddErrors;
            req.flash('categoryAddErrors', categoryAddErrors);
            req.flash('categoryData', req.body);
            return res.redirect('/addCategory');
          }
          req.flash('categoryAddSuccess', cat_name + " Added Successfully.");
          req.flash('categoryData', req.body);
          return res.redirect('/addCategory');
        });
      }
    });
};

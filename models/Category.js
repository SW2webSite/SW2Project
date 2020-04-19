//jshint esversion:6
const mongoose = require('mongoose');


const CategorySchema = new mongoose.Schema({
  category_ID: mongoose.Schema.Types.ObjectId,
  name: String
});

const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;

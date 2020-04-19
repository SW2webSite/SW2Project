//jshint esversion:6
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: [true, "Product's name is required."]
  },
  price: {
    type: String,
    required: [true, "Product's price is required"]
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: [true, "Product's category is required."]
  },

});


module.exports = mongoose.model('Product', ProductSchema);

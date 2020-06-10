const extendSchema = require('mongoose-extend-schema');
const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema({
name: String,
category:{
  type: mongoose.Schema.Types.ObjectId,
  ref: 'Category',
  required: [true, "Product's category is required."]
},
img: String,
price: Number,
description: String,
owner:{
  type: mongoose.Schema.Types.ObjectId,
  ref: 'User',
  required: true
}
});

//  model"product"

module.exports= mongoose.model('Product',ProductSchema);

const extendSchema = require('mongoose-extend-schema');
const mongoose = require('mongoose');
const UserSchema = require('user.js');


const ProductSchema = new mongoose.Schema({
name: String,
category:String,
price: Number,
discribtion: String,
owner:UserSchema
});

//  model"product"
const Product = mongoose.model('product',ProductSchema);

module.exports=mongoose.model('Product',ProductSchema);

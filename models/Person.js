//jshint esversion:6
const mongoose = require('mongoose');
const PersonSchema = new mongoose.Schema({
  username:{
    type:String,
    required:[true,"Please provide your Username"],
    unique:true
  },
  email:{
    type:String,
    required: [true, "Please provide your Email"],
    unique:true
  },
  password:{
    type:String,
    required:[true,"Please provide your Password"]
  }
});

module.exports = PersonSchema;

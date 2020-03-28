//jshint esversion:6
const bcrypt = require('bcryptjs');
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

PersonSchema.pre('save', function(next){
  const user = this;
  bcrypt.hash(user.password,10, function(err, encrypted){
    user.password = encrypted;
    next();
  });
});

module.exports = mongoose.model('Person', PersonSchema);

//jshint esversion:6
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const AdminSchema = new mongoose.Schema({
  username:{
    type:String,
    required:[true,"Please provide your Username"],
    unique:true
  },
  firstname: {type: String},
  lastname: {type: String},
  email:{
    type:String,
    required: [true, "Please provide your Email"],
    unique:true
  },
  password:{
    type:String,
    required:[true,"Please provide your Password"]
  },
});

AdminSchema.pre('save', function(next){
  const user = this;
  bcrypt.hash(user.password,10, function(err, encrypted){
    user.password = encrypted;
    next();
  });
});

module.exports = mongoose.model('Admin', AdminSchema);

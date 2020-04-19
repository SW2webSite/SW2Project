//jshint esversion:6
const extendSchema = require('mongoose-extend-schema');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const PersonSchema = require('../models/Person.js');

const UserSchema = extendSchema(PersonSchema,{
  firstname: {type: String},
  lastname: {type: String}
});

UserSchema.pre('save', function(next){
  const user = this;
  bcrypt.hash(user.password,10, function(err, encrypted){
    user.password = encrypted;
    next();
  });
});

module.exports = mongoose.model('User', UserSchema);

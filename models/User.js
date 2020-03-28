//jshint esversion:6
const extendSchema = require('mongoose-extend-schema');
const mongoose = require('mongoose');
const PersonSchema = require('Person.js');

const UserSchema = extendSchema(PersonSchema,{
  firstname: {type: String},
  lastname: {type: String}
});

module.exports = mongoose.model('User', UserSchema);

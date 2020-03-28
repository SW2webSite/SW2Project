//jshint esversion:6
const extendSchema = require('mongoose-extend-schema');
const mongoose = require('mongoose');
const PersonSchema = require('Person.js');

const AdminSchema = extendSchema(PersonSchema,{

});

module.exports = mongoose.model('Admin', AdminSchema);

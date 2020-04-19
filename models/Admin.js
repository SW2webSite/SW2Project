//jshint esversion:6
const extendSchema = require('mongoose-extend-schema');
const mongoose = require('mongoose');
const PersonSchema = require('../models/Person.js');

const AdminSchema = extendSchema(PersonSchema,{

});

module.exports = mongoose.model('Admin', AdminSchema);

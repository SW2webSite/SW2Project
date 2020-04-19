//jshint esversion:6
const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  OrderNumber: {},
  OrderDate: {
    type:Date,
    default: new Date()
  },
  Products: [
    {
    type: mongoose.Schema.Types.ObjectId,
     ref: "Product"
    }
  ]
});

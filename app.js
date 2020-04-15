const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

//TODO
var loged = "true";//what ever value
var products=[];
var xuser="y"; //visitor "what ever value"

app.get("/",function(req, res){
  res.render("" ,{userlog:loged, newproduct:products, myprof:xuser});
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});

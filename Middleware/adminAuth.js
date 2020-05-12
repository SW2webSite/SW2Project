//jshint esversion:6
const Admin = require('../models/Admin');

module.exports = function(req, res, next){
  //fetch admin from Database
  Admin.findById(req.session.userId, function(err, admin){

    //verify user
    if(err || !admin){
      return res.redirect('/'); //if user isnt logged in redirect to home route
    }else{
        next(); //if admin is logged in redirect to targetted route
    }
  });

};

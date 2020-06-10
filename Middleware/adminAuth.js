//jshint esversion:6
const User = require('../models/User');

module.exports = function(req, res, next){
  //fetch user from Database
  User.findById(req.session.userId, function(err, user){

    //verify user
    if(err || !user || user.role != "Admin"){
      return res.redirect('/'); //if user isnt logged in redirect to home route
    }else{
        next(); //if user is logged in redirect to targetted route
    }
  });

};

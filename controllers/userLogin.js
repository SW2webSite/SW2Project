//jshint esversion:6

const bcrypt = require('bcryptjs');
const User = require('../models/User');


module.exports = function(req, res){
  const {email, password} = req.body;
  User.findOne({ email: email }, function(err, user){
    if(user){
      req.session.userId = user._id;
      req.session.username = user.username;
      bcrypt.compare(password, user.password, function(err, same){
        if(same){
          res.redirect('/');
        }else{
          res.redirect('/auth/login');
        }
      });
    }else{
      return res.redirect('/auth/login');
    }
  });
};

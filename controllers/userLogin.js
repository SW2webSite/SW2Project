//jshint esversion:6

const bcrypt = require('bcryptjs');
const User = require('../models/User');


module.exports = function(req, res){
  const {email, password} = req.body;
  User.findOne({ email: email }, function(err, user){
    if(user){
      req.session.userId = user._id;
      console.log(user);
      req.session.username = user.username;
      req.session.fullName = user.firstname + ' ' + user.lastname;
      bcrypt.compare(password, user.password, function(err, same){
        if(same){
          res.redirect('/');
        }else{
          res.redirect('/login');
        }
      });
    }else{
      return res.redirect('/login');
    }
  });
};

//jshint esversion:6
const User = require('../models/User');

module.exports = function(req, res, next){

  if(req.session.userId){
    return res.redirect('/');
  }else{
    next();
  }
};

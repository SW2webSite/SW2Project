//jshint esversion:6
const User = require('../models/User');

module.exports= function(req, res){
  console.log(req.body);
  user = User.create(req.body, function(error, user){
    if(error){
      const registerationErrors = Object.keys(error.errors).map(key => error.errors[key].message);
      req.session.registerationErrors = registerationErrors;
      req.flash('registerationErrors', registerationErrors);
      req.flash('data', req.body);
      return res.redirect('/auth/register');
    }
    return res.redirect('/auth/register');
  });
};

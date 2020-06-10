const User = require('../models/User');

module.exports = function(req, res){
  User.findById(req.session.userId, function(error, user){
    if (error) return next(err);
    if (req.body.firstname) user.firstname = req.body.firstname;
    if (req.body.lastname) user.lastname = req.body.lastname;
    if (req.body.email) user.email = req.body.email;
    user.save(function(err){
      if (err) return next(err);
      req.flash('success', 'Successfully Edited !');
      return res.redirect('/profile');
    });
  });
};

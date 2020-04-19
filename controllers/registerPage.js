//jshint esversion:6
module.exports = function(req, res){
  res.render('register',{
  errors: req.flash('registerationErrors'),
  data: req.flash('data')[0]
});
};

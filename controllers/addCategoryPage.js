//jshint esversion:6

module.exports = function(req, res){
    res.render('addCategory', {
      catSuccess: req.flash('categoryAddSuccess'),
      catErrors: req.flash('categoryAddErrors'),
      catData: req.flash('catData')[0]
    });
};

//jshint esversion:6

module.exports = function(req, res){
    res.render('addProduct', {
      errors: req.flash('productAddErrors'),
      data: req.flash('productData')[0],
      prodSuccess: req.flash('productAddSuccess'),
      catSuccess: req.flash('categoryAddSuccess'),
      catErrors: req.flash('categoryAddErrors'),
      catData: req.flash('catData')[0]
    });
};

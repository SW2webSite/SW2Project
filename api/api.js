 var router=require('express').Router();
var Product=require('../models/product');








router.post('/search',function(req,res,next){
console.log(req.body.search_term);
Product.search({
query_string : {query : req.body.search_term}
},function (err,results){
  if(err) return next(err);
  res.json(results);

});
});

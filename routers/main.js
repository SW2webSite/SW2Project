

var Product =require('../models/product')

product.createMapping(function(err,mapping){

if (err) {
  console.log("erro creating mapping");
  console.log(err);

}else{
console.log("Mapping created");
console.log(mapping)


}
});
 var stream = product,synchronize();
 var count =0;

 stream.on('data',function(){
   count++;
 });
 stream.on('close',function(){
console.log("indexed" + count +"documents");


 });
 stream.on('error',function(err){
console.log(err);

 });

router.post('/search',function(req,res,next){
res.redirect('/search?q='+req.body.q);

});

router.post('/search',function(req,res,next){
  if(req.query.q){
      Product.search({
        query_string:{query :req.query.q}
      },function(err,results){
  if(err)return nest(err);
  var data +results.hits.hits.map(function(hit){
    return hit;
        });
        res.render('main/search-result',{
          query:req.query.q,
          data:data

        });
      });
     }
});






















var data = json.hits.hits.map(function(hits){
  return hit ;

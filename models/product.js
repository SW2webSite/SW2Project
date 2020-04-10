const mongoose = require('mongoose');
const mongoosastic=require('mongoosastic');
var schema = mongoose.schema;


var ProductSchema = new schema({
category:String,
name : String,
price :Number ,
image:String});

});

//ellasticsearch server port 9200
ProductSchema.plugin(mongoosastic,{
  hosts:['localhost:9200'
]
})

module.exports=mongoose.model('Product',ProductSchema);

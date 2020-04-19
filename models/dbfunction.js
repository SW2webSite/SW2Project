
//fun insertMany
model.insertMany([], function(err){
 if (err){
   console.log(err);
 }else{
   console.log("successfully add all");
 }
});

//fun findall
model.find(function(err,users){
if (err){
  console.log(err);
}else {
  users.forEach(function(user){
  console.log(user.name);
  });
  }
});

//fun update
model.updateOne({condtion:where}, {updated:value}, function(err){
 if (err){
console.log(err);
 }else {
 console.log("successfully updated");
}
});

//fun delete
model.deleteOne({condtion:where},function(err){
 if (err){console.log(err);
 }else{
   console.log("deleted successfully");
 }
});

//fun deletemany
model.deleteMany({condtion:where},function(err){
  if (err){console.log(err);}
  else{console.log("deleted all");}
});

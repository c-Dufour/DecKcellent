var express = require('express');
var app = express();

app.get("/",function(req,res){
  res.sendFile(__dirname+'/index.html');
});

var port = 8084;
app.listen(port,function(){
  console.log("Express node running on port 8084");
});

var express = require('express');
var unirest = require('unirest');
var app = express();




app.get("/",function(req,res){
  res.sendFile(__dirname+'/index.html');
});

app.get("/all",function(req,res){
  unirest.get("https://omgvamp-hearthstone-v1.p.mashape.com/cards")
  .header("X-Mashape-Key", "C6WrgQzmpVmshR7OeckimjUHcg1Yp1wBOipjsnX0U0ukazfOnS")
  .end(function (result) {
    console.log(result.status, result.headers, result.body);
  });
//   unirest.get("https://omgvamp-hearthstone-v1.p.mashape.com/cards/search/kazakus")
// .header("X-Mashape-Key", "C6WrgQzmpVmshR7OeckimjUHcg1Yp1wBOipjsnX0U0ukazfOnS")
// .end(function (result) {
//   console.log(result.status, result.headers, result.body);
// });
  res.sendFile(__dirname+'/view/bidon.html');
})

var port = 8084;
app.listen(port,function(){
  console.log("Express node running on port 8084");
});

var express = require('express');          // Required for routing
var mongoose = require('mongoose');

var app = express();

var vote = 9000;
app.get('/', function(req,res){
  res.send(console.log(vote));
});



//Set server to listen to port 3000
app.listen(3000, function(){
    console.log('Application listening on port 3000.');
});

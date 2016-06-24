var express = require('express');          // Required for routing
var mongoose = require('mongoose');

var app = express();

var db = mongoose.createConnection('localhost', 'sca');
var voteSchema = require('../server/models/vote.js').voteSchema;
var Vote = db.model('vote', voteSchema);
exports.index = function(req, res) {
  res.render('index', {title: 'Features'});
};
//Set server to listen to port 3000
app.listen(3000, function(){
    console.log('Application listening on port 3000.');
});

var mongoose = require('mongoose');

var voteSchema = new mongoose.Schema({
  user: String,
  feature: String,
  upVoted: Boolean
});

mongoose.model('Vote', voteSchema);

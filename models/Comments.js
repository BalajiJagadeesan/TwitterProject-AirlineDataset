var mongoose = require('mongoose');

var commentSchema = new mongoose.Schema({
  body: String,
  tweet: { type: mongoose.Schema.Types.ObjectId, ref: 'Tweets' }
});

mongoose.model('Comment', commentSchema);
var mongoose = require('mongoose');

var AirlineSchema = new mongoose.Schema({
    _unit_id: Number,
    _golden : String,
    _unit_state : String,
    _trusted_judgments : Number,
    _last_judgment_at : String,
    airline_sentiment : String,
    airline_sentiment_confidence : Number,
    negativereason : String,
    negativereason_confidence : String,
    airline : String,
    airline_sentiment_gold : String,
    name : String,
    negativereason_gold : String,
    retweet_count : Number,
    text : String,
    tweet_coord : String,
    tweet_created : String,
    tweet_id : Number,
    tweet_location : String,
    user_timezone : String,
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});

mongoose.model('Airline', AirlineSchema);
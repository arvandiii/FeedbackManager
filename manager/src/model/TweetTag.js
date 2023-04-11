const mongoose = require('./mongo');

const tweetTagSchema = new mongoose.Schema({
    tagId: String,
    tweetId: String,
});

const TweetTag = mongoose.model('TweetTag', tweetTagSchema);

module.exports = TweetTag;
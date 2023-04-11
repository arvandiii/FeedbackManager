const mongoose = require('./mongo');

const tweetSchema = new mongoose.Schema({
    text: String,
    id: String,
    isRelatedToEmergency: Boolean,
});

const Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;
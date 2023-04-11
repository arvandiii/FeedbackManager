const mongoose = require('./mongo');

const tagSchema = new mongoose.Schema({
    text: String,
});

const Tag = mongoose.model('Tag', tagSchema);

module.exports = Tag;
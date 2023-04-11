const axios = require('axios');
const Queue = require('bull');
const Promise = require('bluebird');
const Tweet = require('./model/Tweet');
const Tag = require('./model/Tag');
const TweetTag = require('./model/TweetTag');

const newTweetsQueue = new Queue('newTweets', 'redis://redis:6379');

newTweetsQueue.process(async function (job, done) {
    const { data } = job
    try {
        const result = await axios.get('http://twitterbot:5000/getTweets')
        await Promise.map(result.data, async (tweet) => {
            const aiResult = await axios.post('http://ai:3000/analyze', { text: tweet.text })
            if (aiResult.data.isRelatedToEmergency) {
                const newTweet = await Tweet.create({ text: tweet.text, tweetId: tweet.id })
                console.log('newTweet', newTweet)
                await Promise.map(aiResult.data.tags, async (tag) => {
                    const [newTag, created] = await Tag.findOrCreate({ where: { name: tag } })
                    console.log('newTag', newTag)
                    await TweetTag.create({ tweetId: newTweet.id, tagId: newTag.id })
                    console.log('newTweetTag', newTweetTag)
                })
            }
        })
        console.log(result.data)

    } catch (error) {
        console.log('error newTweetsQueue', error)
    }
    done()
});

const initLoop = () => {
    newTweetsQueue.add({ test: 'salam' }, { repeat: { cron: '*/60 * * * * *' } });
}

module.exports = { initLoop }
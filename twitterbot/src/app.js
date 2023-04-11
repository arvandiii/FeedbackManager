const express = require('express')
const bodyParser = require('body-parser')

const { TWITTER_CONSUMER_KEY, TWITTER_CONSUMER_SECRET, TWITTER_ACCESS_TOKEN, TWITTER_ACCESS_TOKEN_SECRET } = process.env

const getTweets = require('./getTweets')
const getTweetById = require('./getTweetById')
const replyToTweet = require('./replyToTweet')

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

const port = 5000


app.get('/getTweets', async (req, res) => {
    const tweets = await getTweets()
    res.send(tweets)
})

app.get('/getTweetById', async (req, res) => {
    const tweet = await getTweetById({ id: req.query.id })
    res.send(tweet)
})

app.post('/replyToTweet', async (req, res) => {
    const { id, text } = req.body
    const tweet = await replyToTweet({ id, text })
    res.send(tweet)
})

app.listen(port, () => {
    console.log(`Example app listening  on  port ${port}`)
})

console.log("omade inja to twitterbot")
const replyToTweet = async ({ id, text }) => {
    return [
        { text: "hello A", id, comment: text },
    ]
}

module.exports = replyToTweet
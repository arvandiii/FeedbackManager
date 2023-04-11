let idCounter = -3

const getTweets = async () => {
    idCounter += 3
    return [
        { text: "hello A", id: idCounter },
        { text: "hello B", id: idCounter + 1 },
        { text: "hello C", id: idCounter + 2 },
    ]
}

module.exports = getTweets
const axios = require('axios');
const Queue = require('bull');
const newTweetsQueue = new Queue('newTweets', 'redis://redis:6379');

newTweetsQueue.process(async function (job, done) {
    const data = {job}
    try {
        const result = await axios.get('localhost:5000/getTweets')
        console.log(data, result)
    } catch (error) {
        console.log(data, 'error newTweetsQueue', error)
    }
    done()
});

const initLoop = () => {
    newTweetsQueue.add({test: 'salam'}, { repeat: { cron: '*/10 * * * * *' } });
}
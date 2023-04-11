const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

const port = 3000

app.get('/', async (req, res) => {
    res.send({hi: 'there'})
})

app.post('/analyze ', async (req, res) => {
    const { text } = req.body
    res.send({ text, isRelatedToEmergency: true, tags: ['water'] })
})

app.listen(port, () => {
    console.log(`Example app listening  on  port ${port}`)
})

console.log("log ai")
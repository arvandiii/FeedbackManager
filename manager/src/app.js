const express = require('express')
const bodyParser = require('body-parser')
const loop = require('./loop')

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

const port = 4000

app.get('/', async (req, res) => {
    res.send({})
})

app.listen(port, () => {
    console.log(`Example app listening  on  port ${port}`)
})

loop.initLoop()

console.log("log manager")
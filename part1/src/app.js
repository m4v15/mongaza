const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.set('port', process.env.PORT || 4444)

app.use(bodyParser.json())

module.exports = app

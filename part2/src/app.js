const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.set('port', process.env.PORT || 4444)

app.use(bodyParser.json())

app.get('/members', (req, res) => {

})

app.get('/students', (req, res) => {

})

app.get('/mentors', (req, res) => {

})

module.exports = app

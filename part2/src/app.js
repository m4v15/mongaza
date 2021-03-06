const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.set('port', process.env.PORT || 4444)

app.use(bodyParser.json())

app.get('/members', (req, res) => {
  // send back a JSON of all the members

})

app.get('/students', (req, res) => {
  // send back a JSON of all the students
})

app.get('/mentors', (req, res) => {
  // send back a JSON of all the mentors
})

module.exports = app

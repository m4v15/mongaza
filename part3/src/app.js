const express = require('express')
const bodyParser = require('body-parser')
const { Member } = require('../db/models')

const app = express()
app.set('port', process.env.PORT || 4444)

app.use(bodyParser.json())

app.get('/members', (req, res) => {
  // send back a JSON of all the members
  Member.find({}, (err, docs) => {
    if (err) console.log(err)
    res.json(docs)
  })

})

app.get('/students', (req, res) => {
  // send back a JSON of all the students
  Member.find({role: 'student'}, (err, docs) => {
    if (err) console.log(err)
    res.json(docs)
  })
})

app.get('/mentors', (req, res) => {
  // send back a JSON of all the mentors
  Member.find({role: 'mentor'}, (err, docs) => {
    if (err) console.log(err)
    res.json(docs)
  })
})

module.exports = app

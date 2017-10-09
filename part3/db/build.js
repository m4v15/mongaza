// This file is only to run once, to populate our database

require('dotenv').config()

const { Member } = require('./models')

// connect to the db
const dbConnection = require('./connect.js')

dbConnection.once('open', () => {
  const ahmed = {
    name: 'ahmed',
    role: 'student',
    age: 25,
    skills: ['node js', 'FIFA']
  }

  const wadia = {
    name: 'Wadia',
    role: 'student',
    age: 20,
    skills: ['HTML', 'promises']
  }

  const saral = {
    name: 'Saral',
    role: 'mentor',
    age: 28,
    skills: ['meetings', 'spanish']
  }

  const mg = {
    name: 'MG',
    role: 'mentor',
    age: 28,
    skills: ['dancing', 'arabic']
  }

  Member.create([ahmed, wadia, saral, mg], (err, docs) => {
    if (err) console.log(err)
    dbConnection.close()
  })
})

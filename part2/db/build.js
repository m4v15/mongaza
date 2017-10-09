// This file is only to run once, to populate our database

require('dotenv').config()

const { Member } = require('./models')

// connect to the db
const dbConnection = require('./connect.js')

dbConnection.once('open', () => {
  // we're connected to the database
  // Lets add some stuff to our database here
  // Add some students and add some mentors
  dbConnection.close()
})

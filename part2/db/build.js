require('dotenv').config()

const { Member } = require('./models')

// connect to the db
const dbConnection = require('./connect.js')

dbConnection.once('open', () => {
  // we're connected to the database
  // Lets add some stuff to our database here
  dbConnection.close()
})

require('dotenv').config()

const app = require('./app.js')

// connect to the db
const dbConnection = require('../db/connect.js')

dbConnection.once('open', () => {
  // we're connected to the database
  app.listen(app.get('port'), (err) => {
    if (err) {
      throw err
    }
    console.log('Server running at port ' + app.get('port'))
  })
})

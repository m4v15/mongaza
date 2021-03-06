require('dotenv').config()

const app = require('./app.js')

// connect to the db before we start our app so we can then
// access models and collections
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

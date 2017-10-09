const mongoose = require('mongoose')

const memberSchema = mongoose.Schema({
  name: String,
  role: String,
  age: Number,
  skills: [String]
})

module.exports = {
  Member: mongoose.model('Member', memberSchema)
}

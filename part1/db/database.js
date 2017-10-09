require('dotenv').config()

const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI)

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function callback () {
  // yay!

  // Make a schema, or structure, for our database
  const memberSchema = mongoose.Schema({
    name: String,
    role: String,
    age: Number,
    skills: [String]
  })

  // Using our schema, make a mongoose model, which will refer to a collection
  // in Mongo
  const Member = mongoose.model('Member', memberSchema)

  // make an object to add to our model/collection
  const mantagen = {}
  mantagen.name = 'Matt G'
  mantagen.role = 'Facilitator'
  mantagen.age = 28
  mantagen.skills = ['story telling', 'arabic', 'getting fresh air']

  // make it a new Member document
  const mantagenMember = new Member(mantagen)

  // as a new document we can save it
  mantagenMember.save((err) => {
    if (err) console.log(err)
    console.log('Added to DB')
    db.close()
  })
  // look in the member collection for all the documents
  // also other ways to save
})
//
// Member.find({}, (err, docs) => {
//   if (err) console.log(err)
//   console.log(docs)
// })

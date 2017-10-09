require('dotenv').config()

const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI)

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function callback () {
  // yay!
  const memberSchema = mongoose.Schema({
    name: String,
    role: String,
    age: Number,
    skills: [String]
  })

  const Member = mongoose.model('Member', memberSchema)

  const mantagen = {}
  mantagen.name = 'Matt G'
  mantagen.role = 'Facilitator'
  mantagen.age = 28
  mantagen.skills = ['story telling', 'arabic', 'getting fresh air']

  const mantagenMember = new Member(mantagen)

  mantagenMember.save((err) => {
    if (err) console.log(err)
    console.log('Added to DB')

    Member.find({}, (err, docs) => {
      if (err) console.log(err)
      console.log(docs)
      db.close()
    })
  })
})

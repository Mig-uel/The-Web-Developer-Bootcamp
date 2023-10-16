const mongoose = require('mongoose')

const personSchema = new mongoose.Schema({
  first: String,
  last: String,
})

personSchema.virtual('fullName').get(function () {
  return `${this.first} ${this.last}`
})

const Person = mongoose.model('Person', personSchema)

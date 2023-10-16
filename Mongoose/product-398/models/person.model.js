const mongoose = require('mongoose')

const personSchema = new mongoose.Schema({
  first: String,
  last: String,
})

personSchema.virtual('fullName').get(function () {
  return `${this.first} ${this.last}`
})

personSchema.pre('save', async function () {
  console.log('ABOUT TO SAVE...')
})

personSchema.post('save', async function () {
  console.log('JUST SAVED...')
})

const Person = mongoose.model('Person', personSchema)

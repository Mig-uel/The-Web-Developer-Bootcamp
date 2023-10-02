const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSchema = new Schema({
  title: String,
  year: Number,
  score: Number,
  rating: String,
})

const Movie = mongoose.model('Movie', movieSchema)

module.exports = { Movie }

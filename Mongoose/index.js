const mongoose = require('mongoose')
const { Movie } = require('./models/movie.schema')

mongoose
  .connect('mongodb://127.0.0.1:27017/movieDB')
  .then(() => console.log('CONNECTION OPENED...'))
  .catch((e) => console.log(e))

Movie.insertMany([
  { title: 'Amelie', year: 2001, score: 8.3, rating: 'R' },
  { title: 'Alien', year: 1979, score: 8.1, rating: 'R' },
  { title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG' },
  { title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R' },
  { title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'PG-13' },
]).then((data) => console.log(data))

const mongoose = require('mongoose')
const { Movie } = require('./models/movie.schema')

mongoose
  .connect('mongodb://127.0.0.1:27017/movieDB')
  .then(() => console.log('CONNECTION OPENED...'))
  .catch((e) => console.log(e))

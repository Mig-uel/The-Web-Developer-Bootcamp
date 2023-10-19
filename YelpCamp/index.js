const express = require('express')
const mongoose = require('mongoose')
const path = require('path')

// campground model
const Campground = require('./model/campground.model')

// mongoose local database
mongoose
  .connect('mongodb://127.0.0.1:27017/yelpcamp')
  .then(() => console.log('DATABASE CONNECTED'))
  .catch((e) => console.log(e))

const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/campgrounds', async (req, res) => {
  const campgrounds = await Campground.find({})

  res.render('campgrounds/index', { campgrounds })
})

app.listen(port, () => console.log(`SERVER STARTED ON PORT: ${port}`))

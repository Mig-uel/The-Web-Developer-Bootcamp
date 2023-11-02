const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const methodOverride = require('method-override')

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
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/campgrounds', async (req, res) => {
  const campgrounds = await Campground.find({})

  res.render('campgrounds/index', { campgrounds })
})

app.get('/campgrounds/add', (req, res) => {
  res.render('campgrounds/add')
})

app.post('/campgrounds', async (req, res) => {
  const campground = new Campground(req.body.campground)
  await campground.save()

  res.redirect(`/campgrounds/${campground._id}`)
})

app.get('/campgrounds/:id', async (req, res) => {
  const { id } = req.params
  const campground = await Campground.findById(id)

  res.render('campgrounds/details', { campground })
})

app.get('/campgrounds/:id/edit', async (req, res) => {
  const { id } = req.params

  const campground = await Campground.findById(id)

  res.render('campgrounds/edit', { campground })
})

app.put('/campgrounds/:id', async (req, res) => {
  const { id } = req.params

  const updatedCampground = await Campground.findByIdAndUpdate(id, {
    ...req.body.campground,
  })

  res.redirect(`/campgrounds/${id}`)
})

app.listen(port, () => console.log(`SERVER STARTED ON PORT: ${port}`))

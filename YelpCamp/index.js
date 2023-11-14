const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const methodOverride = require('method-override')
const ejsMate = require('ejs-mate')
const catchAsync = require('./utils/catchAsync')
const ExpressError = require('./utils/ExpressError')
const campgroundSchema = require('./schemas')

// campground model
const Campground = require('./model/campground.model')

// mongoose local database
mongoose
  .connect('mongodb://127.0.0.1:27017/yelpcamp')
  .then(() => console.log('DATABASE CONNECTED'))
  .catch((e) => console.log(e))

const app = express()
const port = 3000

app.engine('ejs', ejsMate)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

const validateCampground = (req, res, next) => {
  const { error } = campgroundSchema.validate(req.body)

  if (error) {
    const msg = error.details.map((e) => e.message).join(',')
    throw new ExpressError(msg, 400)
  } else next()
}

app.get('/', (req, res) => {
  res.render('home')
})

app.get(
  '/campgrounds',
  catchAsync(async (req, res) => {
    const campgrounds = await Campground.find({})

    res.render('campgrounds/index', { campgrounds })
  })
)

app.get('/campgrounds/add', (req, res) => {
  res.render('campgrounds/add')
})

app.post(
  '/campgrounds',
  validateCampground,
  catchAsync(async (req, res) => {
    const campground = new Campground(req.body.campground)
    await campground.save()

    res.redirect(`/campgrounds/${campground._id}`)
  })
)

app.get(
  '/campgrounds/:id',
  catchAsync(async (req, res) => {
    const { id } = req.params
    const campground = await Campground.findById(id)

    res.render('campgrounds/details', { campground })
  })
)

app.get(
  '/campgrounds/:id/edit',
  catchAsync(async (req, res) => {
    const { id } = req.params

    const campground = await Campground.findById(id)

    res.render('campgrounds/edit', { campground })
  })
)

app.put(
  '/campgrounds/:id',
  validateCampground,
  catchAsync(async (req, res) => {
    const { id } = req.params

    const updatedCampground = await Campground.findByIdAndUpdate(id, {
      ...req.body.campground,
    })

    res.redirect(`/campgrounds/${id}`)
  })
)

app.delete(
  '/campgrounds/:id',
  catchAsync(async (req, res) => {
    const { id } = req.params

    await Campground.findByIdAndDelete(id)

    res.redirect('/campgrounds')
  })
)

app.all('*', (req, res, next) => {
  next(new ExpressError('Page Not Found', 404))
})

// Error handler
app.use((err, req, res, next) => {
  const { statusCode = 500 } = err

  if (!err.message) err.message = 'Oh no, something went wrong...'
  res.status(statusCode).render('error', { err })
})

app.listen(port, () => console.log(`SERVER STARTED ON PORT: ${port}`))

const mongoose = require('mongoose')
const Campground = require('../model/campground.model')

const cities = require('./cities')
const { descriptors, places } = require('./seedHelpers')

mongoose
  .connect('mongodb://127.0.0.1:27017/yelpcamp')
  .then(() => console.log('DATABASE CONNECTED'))
  .catch((e) => console.log(e))

const sample = (arr) => arr[Math.floor(Math.random() * arr.length)]

const seedDB = async () => {
  // delete everything from db
  await Campground.deleteMany({})

  for (let i = 0; i < 50; i++) {
    const random1000 = Math.floor(Math.random() * 1000)

    const camp = new Campground({
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
    })

    await camp.save()
  }
}

seedDB().then(() => mongoose.connection.close())

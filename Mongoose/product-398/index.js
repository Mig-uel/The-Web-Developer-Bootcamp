const mongoose = require('mongoose')
const { Product } = require('./models/product.schema')

mongoose
  .connect('mongodb://127.0.0.1:27017/shopApp')
  .then(() => console.log('CONNECTION STARTED...'))
  .catch((e) => console.log(e))

const bike = new Product({
  name: 'Bike Helmet',
  price: 19.5,
  categories: ['Cycling', 'Safety'],
})

bike
  .save()
  .then((data) => console.log(data))
  .catch((e) => console.log(e))

module.exports = { mongoose }

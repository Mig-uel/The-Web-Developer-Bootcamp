const mongoose = require('mongoose')
const { Product, findProduct } = require('./models/product.schema')

mongoose
  .connect('mongodb://127.0.0.1:27017/shopApp')
  .then(() => console.log('CONNECTION STARTED...'))
  .catch((e) => console.log(e))

// const bike = new Product({
//   name: 'Cycling Jersey',
//   price: 28.51,
//   categories: ['Cycling'],
//   size: 'L',
// })

// bike
//   .save()
//   .then((data) => console.log(data))
//   .catch((e) => console.log(e))

// Product.findOneAndUpdate(
//   { name: 'Tire Pump' },
//   { price: 19.99 },
//   { new: true, runValidators: true }
// )
//   .then((data) => console.log(data))
//   .catch((e) => console.log(e))

findProduct()

module.exports = { mongoose }

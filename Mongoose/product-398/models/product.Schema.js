const mongoose = require('mongoose')
const productModel = require('./product.model')

const productSchema = new mongoose.Schema(productModel)

productSchema.methods.toggleOnSale = function () {
  this.onSale = !this.onSale
  return this.save()
}

productSchema.statics.fireSale = function () {
  return this.updateMany({}, { onSale: true, price: 0 })
}

const Product = mongoose.model('Product', productSchema)

const findProduct = async () => {
  const foundProduct = await Product.findOne({ name: 'Mountain Bike' })
  console.log(foundProduct)

  await foundProduct.toggleOnSale()
  console.log(foundProduct)
}

module.exports = { Product, findProduct }

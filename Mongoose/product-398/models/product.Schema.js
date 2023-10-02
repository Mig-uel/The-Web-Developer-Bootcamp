const mongoose = require('mongoose')
const productModel = require('./product.model')

const productSchema = new mongoose.Schema(productModel)

const Product = mongoose.model('Product', productSchema)

module.exports = { Product }

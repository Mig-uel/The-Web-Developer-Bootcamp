const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const methodOverride = require('method-override')

const Product = require('./models/product.model')

const app = express()
const port = 3000

mongoose
  .connect('mongodb://127.0.0.1:27017/crudApp')
  .then(() => console.log('CONNECTED TO MONGO DATABASE'))
  .catch((err) => console.log(err))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

const categories = ['fruit', 'vegetable', 'dairy']

app.get('/products', async (req, res) => {
  const products = await Product.find({})
  res.render('products/index', { products })
})

app.get('/products/add', (req, res) => {
  res.render('products/add', { categories })
})

app.post('/products', async (req, res) => {
  const newProduct = new Product(req.body)
  await newProduct.save()

  res.redirect(`/products/${newProduct._id}`)
})

app.get('/products/:id', async (req, res) => {
  const { id } = req.params
  const product = await Product.findById(id)

  res.render('products/details', { product })
})

app.get('/products/:id/edit', async (req, res) => {
  const { id } = req.params
  const product = await Product.findById(id)

  res.render('products/edit', { product, categories })
})

app.put('/products/:id', async (req, res) => {
  const { id } = req.params
  const product = await Product.findByIdAndUpdate(id, req.body, {
    runValidators: true,
    new: true,
  })

  res.redirect(`/products/${product._id}`)
})

app.delete('/products/:id', async (req, res) => {
  const { id } = req.params

  const product = await Product.findByIdAndDelete(id)

  res.redirect('/products')
})

app.listen(port, () => {
  console.log('SERVER STARTED')
})

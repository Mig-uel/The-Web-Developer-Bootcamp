const express = require('express')
const mongoose = require('mongoose')
const path = require('path')

const Product = require('./models/product.model')

const app = express()
const port = 3000

mongoose
  .connect('mongodb://127.0.0.1:27017/crudApp')
  .then(() => console.log('CONNECTED TO MONGO DATABASE'))
  .catch((err) => console.log(err))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/dogs', (req, res) => {
  res.send('WOOF!')
})

app.listen(port, () => {
  console.log('SERVER STARTED')
})

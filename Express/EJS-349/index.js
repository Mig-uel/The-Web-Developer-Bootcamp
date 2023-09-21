// Express
const express = require('express')
const app = express()
const path = require('path')

// Routes
const { defaultGetRoute, randomNumberGetRoute } = require('./routes/getRoutes')

const port = 3000
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

app.get('/random', randomNumberGetRoute)
app.get('/', defaultGetRoute)

app.listen(port, () => {
  console.log('SERVER STARTED!')
})

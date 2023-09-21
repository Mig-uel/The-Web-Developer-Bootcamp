// Express
const express = require('express')
const app = express()
const path = require('path')

// Routes
const { defaultRoute } = require('./routes/getRoutes')

const port = 3000
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

app.get('/', defaultRoute)

app.listen(port, () => {
  console.log('SERVER STARTED!')
})

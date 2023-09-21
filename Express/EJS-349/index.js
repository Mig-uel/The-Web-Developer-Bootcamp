// Routes
const { defaultRoute } = require('./routes/getRoutes')

const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.get('/', defaultRoute)

app.listen(port, () => {
  console.log('SERVER STARTED!')
})

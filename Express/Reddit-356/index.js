const express = require('express')
const path = require('path')

const { subredditRoutes } = require('./routes/getRoutes')

const app = express()
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

const port = 3000

app.get('/r/:id', subredditRoutes)

app.get('*', (req, res) => {
  res.send('<h1>404 Not Found!</h1>')
})

app.listen(port, () => {
  console.log('SERVER STARTED!')
})

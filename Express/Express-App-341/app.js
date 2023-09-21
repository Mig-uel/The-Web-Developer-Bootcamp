const express = require('express')
const port = 3000
const app = express()

// middleware
app.use((req, res, next) => {
  console.log('NEW REQUEST!')
  console.log(`User requested: ${req.url}`)
  next()
})

// route with params (:id)
app.get('/r/:id', ({ params: { id } }, res) => {
  // destructuring from req object to get params
  res.send(`<h1>THIS IS THE SUBREDDIT: r/${id}</h1>`)
})

// /cats route (GET)
app.get('/cats', (req, res) => {
  res.send('<h1>Cats</h1>')
})

// /cats route (POST)
app.post('/cats', (req, res) => {
  res.send({ response: 'POSTED TO /cats' })
})

// /dogs route
app.get('/dogs', (req, res) => {
  res.send('<h1>Dogs</h1>')
})

// '/'
app.get('/', (req, res) => {
  res.send('<h1>Home</h1>')
})

// 404 Handler
app.get('*', (req, res) => {
  res.write('<h1>404 Page Not Found</h1>')
})

app.listen(port, () => {
  console.log('Listening on port 3000')
})

const express = require('express')
const port = 3000
const app = express()

// middleware
app.use((req, res, next) => {
  console.log('NEW REQUEST!')
  console.log(`User requested: ${req.url}`)
  next()
})

// route with query strings
app.get('/search', (req, res) => {
  const { query } = req

  res.write('<h1>Search</h1>')

  if (!query.q) res.write('NOTHING FOUND, IF NOTHING SEARCHED!')
  else res.write(`<p>Searched for: ${query.q}`)

  console.log(query)
})

// route with params (:id)
app.get('/r/:id', (req, res) => {
  const {
    params: { id },
  } = req

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

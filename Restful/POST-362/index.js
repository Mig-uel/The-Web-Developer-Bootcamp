const express = require('express')

const app = express()
const port = 3000

app.get('/tacos', (req, res) => {
  res.send('GET /tacos response')
})

app.post('/tacos', (req, res) => {
  res.send({ response: 'POST /tacos response' })
})

app.listen(port, () => {
  console.log('SERVER STARTED!')
})

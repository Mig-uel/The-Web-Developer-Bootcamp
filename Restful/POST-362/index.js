const express = require('express')

const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/tacos', (req, res) => {
  res.send('GET /tacos response')
})

app.post('/tacos', (req, res) => {
  const { meat, qty } = req.body
  res.send({ response: 'POST /tacos response', data: [meat, qty] })
})

app.listen(port, () => {
  console.log('SERVER STARTED!')
})

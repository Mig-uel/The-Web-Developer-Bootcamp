const express = require('express')
const morgan = require('morgan')

const app = express()
const port = 3000

// Middleware
app.use(morgan('tiny'))
// app.use((req, res, next) => {
//   console.log('MORGAN MIDDLEWARE COMING UP...')
//   next()
// })

app.use((req, res, next) => {
  req.requestTime = Date.now()

  console.log(req.method, req.path)
  return next()
})

//Routes
app.get('/', (req, res) => {
  console.log(req.requestTime)

  res.send('Homepage!')
})

app.get('/dogs', (req, res) => {
  res.send('WOOF WOOF!')
})

app.listen(port, () => console.log(`SERVER STARTED ON PORT ${port}`))

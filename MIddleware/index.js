const express = require('express')
const morgan = require('morgan')
const AppError = require('./AppError')

const app = express()
const port = 3000

// Middleware
app.use(morgan('tiny'))
// app.use((req, res, next) => {
//   console.log('MORGAN MIDDLEWARE COMING UP...')
//   next()
// })

// app.use((req, res, next) => {
//   req.requestTime = Date.now()

//   console.log(req.method, req.path)
//   return next()
// })

// Middleware w/ path
app.use('/dogs', (req, res, next) => {
  console.log('I LOVE DOGS <3')

  return next()
})

// Middleware function to be passed to GET route
const verifyPassword = (req, res, next) => {
  const { password } = req.query

  if (password === 'chickennugget') {
    return next()
  }

  throw new AppError('Password required!', 401)
  // res.send('SORRY YOU NEED A PASSWORD!')
}

//Routes
app.get('/', (req, res) => {
  // console.log(req.requestTime)

  res.send('Homepage!')
})

app.get('/dogs', (req, res) => {
  res.send('WOOF WOOF!')
})

// Route with Middleware (middleware callback, route callback)
app.get('/secret', verifyPassword, (req, res) => {
  res.send('YOU ARE IN!')
})

app.get('/error', (req, res) => {
  chicken.fly()
})

app.get('/admin', (req, res) => {
  throw new AppError('You do not have Admin privileges!', 403)
})

// 404 page
app.use((req, res) => {
  res.send('404 NOT FOUND...')
})

// Error Handling
// app.use((err, req, res, next) => {
//   console.log('**************************')
//   console.log('********ERROR**********')
//   console.log('**************************')
//   console.log(err)

//   next(err)
// })

app.use((err, req, res, next) => {
  const { status = 500, message = 'Something went wrong!' } = err
  res.status(status).send(message)
})

app.listen(port, () => console.log(`SERVER STARTED ON PORT ${port}`))

// const express = require('express')
const mongoose = require('mongoose')

// const port = 3000
// const app = express()
mongoose
  .connect('mongodb://127.0.0.1:27017/movieDB')
  .then(() => console.log('CONNECTION OPENED...'))
  .catch((e) => console.log(e))

// app.listen(port, () => {
//   console.log(`SERVER STARTED ON PORT: ${port}`)
// })

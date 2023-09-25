const express = require('express')
const path = require('path')

const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set('views', path.join(__dirname + 'views'))
app.set('view engine', 'ejs')

app.listen(port, () => {
  console.log(`SERVER STARTED ON PORT: ${port}`)
})

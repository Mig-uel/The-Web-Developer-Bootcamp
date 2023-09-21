const express = require('express')
const port = 3000
const app = express()

app.use((req, res) => {
  console.log('NEW REQUEST!')
})

app.listen(port, () => {
  console.log('Listening on port 3000')
})

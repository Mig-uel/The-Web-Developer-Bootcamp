const express = require('express')
const path = require('path')

const {
  getAllComments,
  getNewCommentForm,
  getAComment,
} = require('./routes/getRoutes')
const { postComment } = require('./routes/postRoutes')

const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set('views', path.join(__dirname + '/views'))
app.set('view engine', 'ejs')

app.get('/comments', getAllComments)
app.get('/comments/new', getNewCommentForm)
app.get('/comments/:id', getAComment)

app.post('/comments', postComment)

app.listen(port, () => {
  console.log(`SERVER STARTED ON PORT: ${port}`)
})

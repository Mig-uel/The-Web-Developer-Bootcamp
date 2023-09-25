const express = require('express')
const path = require('path')
const methodOverride = require('method-override')

const {
  getAllComments,
  getNewCommentForm,
  getAComment,
  getEditCommentForm,
} = require('./routes/getRoutes')
const { postComment } = require('./routes/postRoutes')
const { patchAComment } = require('./routes/patchRoutes')
const { deleteAComment } = require('./routes/deleteRoutes')

const app = express()
const port = 3000

app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set('views', path.join(__dirname + '/views'))
app.set('view engine', 'ejs')

app.get('/comments', getAllComments)
app.get('/comments/new', getNewCommentForm)
app.get('/comments/:id', getAComment)
app.get('/comments/edit/:id', getEditCommentForm)

app.patch('/comments/:id', patchAComment)

app.post('/comments', postComment)

app.delete('/comments/:id', deleteAComment)

app.listen(port, () => {
  console.log(`SERVER STARTED ON PORT: ${port}`)
})

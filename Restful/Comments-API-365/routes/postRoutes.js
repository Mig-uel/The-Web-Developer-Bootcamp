let { comments } = require('../comments')
const { v4: uuid } = require('uuid')

const postComment = (req, res) => {
  const { username, comment } = req.body
  if (username && comment) comments.push({ username, comment, id: uuid() })

  res.redirect('/comments')
}

module.exports = {
  postComment,
}

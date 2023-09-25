const { comments } = require('../comments')

const postComment = (req, res) => {
  const { username, comment } = req.body
  if (username && comment) comments.push({ username, comment })

  res.redirect('/comments')
}

module.exports = {
  postComment,
}

const { comments } = require('../comments')

const postComment = (req, res) => {
  const { username, comment } = req.body
  if (username && comment) comments.push({ username, comment })

  res.render('comments/index', { comments })
}

module.exports = {
  postComment,
}

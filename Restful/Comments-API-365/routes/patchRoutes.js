let { comments } = require('../comments')

const patchAComment = (req, res) => {
  const { id } = req.params
  const oldComment = comments.find((c) => c.id === id)

  const newComment = req.body.comment

  oldComment.comment = newComment

  res.redirect('/comments')
}

module.exports = { patchAComment }

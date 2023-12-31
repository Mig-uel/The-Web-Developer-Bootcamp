let { comments } = require('../comments')

const getAllComments = (req, res) => {
  res.render('comments/index', { comments })
}

const getNewCommentForm = (req, res) => {
  res.render('comments/new')
}

const getAComment = (req, res) => {
  const { id } = req.params

  const comment = comments.find((c) => c.id === id)

  res.render('comments/details', { comment })
}

const getEditCommentForm = (req, res) => {
  const { id } = req.params
  const comment = comments.find((c) => c.id === id)

  res.render('comments/edit', { comment })
}

module.exports = {
  getAllComments,
  getNewCommentForm,
  getAComment,
  getEditCommentForm,
}

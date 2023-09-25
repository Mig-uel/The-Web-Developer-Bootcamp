const { comments } = require('../comments')

const getAllComments = (req, res) => {
  res.render('comments/index', { comments })
}

const getNewCommentForm = (req, res) => {
  res.render('comments/new')
}

module.exports = {
  getAllComments,
  getNewCommentForm,
}

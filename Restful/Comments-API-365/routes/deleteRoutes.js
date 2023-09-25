let { comments } = require('../comments')

const deleteAComment = (req, res) => {
  const { id } = req.params
  // console.log(id)

  comments = comments.filter((c) => c.id !== id)
  // console.log(comments)

  res.redirect('/comments')
}

module.exports = {
  deleteAComment,
}

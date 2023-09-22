const redditData = require('../data.json')

const subredditRoutes = (req, res) => {
  const {
    params: { id },
  } = req

  const data = redditData[id]

  if (data) {
    res.render('subreddit', { ...data })
  } else {
    res.render('notfound', { id })
  }
}

module.exports = {
  subredditRoutes,
}

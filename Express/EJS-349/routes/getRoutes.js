const defaultGetRoute = (req, res) => {
  res.render('home')
}

const randomNumberGetRoute = (req, res) => {
  const randomNumber = Math.floor(Math.random() * 10) + 1

  res.render('random', { randomNumber })
}

const subredditGetRoute = (req, res) => {
  const {
    params: { id },
  } = req

  res.render('subreddit', { id })
}

module.exports = {
  defaultGetRoute,
  randomNumberGetRoute,
  subredditGetRoute,
}

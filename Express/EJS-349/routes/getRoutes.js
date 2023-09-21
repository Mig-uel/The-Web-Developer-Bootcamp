const defaultGetRoute = (req, res) => {
  res.render('home')
}

const randomNumberGetRoute = (req, res) => {
  const randomNumber = Math.floor(Math.random() * 10) + 1

  res.render('random', { randomNumber })
}

module.exports = {
  defaultGetRoute,
  randomNumberGetRoute,
}

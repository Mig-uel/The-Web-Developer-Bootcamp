const { v4: uuid } = require('uuid')

let comments = [
  {
    id: uuid(),
    username: 'Todd',
    comment: 'lol that is so funny',
  },
  {
    id: uuid(),
    username: 'Skyler',
    comment: 'I like to go birdwatching',
  },
  {
    id: uuid(),
    username: 'Sk8erBoi',
    comment: 'Plz delete your account, Todd',
  },
  {
    id: uuid(),
    username: 'onlysayswoof',
    comment: 'woof woof woof',
  },
]

module.exports = {
  comments,
}

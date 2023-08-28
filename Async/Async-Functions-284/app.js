// async function asyncFunction () {}

// const asyncArrowFunction = async () => {
//   // throw error, promise is rejected
//   throw new Error('CODE 404')

//   return 'LA LA LA LA LA'
// }

// asyncArrowFunction()
//   .then((data) => console.log(`PROMISE RESOLVED WITH DATA: ${data}`))
//   .catch((err) => console.log('Error:', err))

const login = async (username, password) => {
  if (!username || !password) throw 'Missing Credentials!'

  if (password === 'drake') return 'WELCOME!'
  throw 'INVALID PASSWORD'
}

login('user', 'drake')
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err))

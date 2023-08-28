const fakeRequestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500

    setTimeout(() => {
      if (delay > 4000) reject('Connection Timeout!')
      else resolve(`Here is your fake data from ${url}`)
    }, delay)
  })
}

fakeRequestPromise('https;//yelp.com/api/Crunch/page-1')
  .then((res) => {
    console.log(res)

    fakeRequestPromise('https://yelp.com/api/Crunch/page-2')
      .then((res) => {
        console.log(res)

        fakeRequestPromise('https://yelp.com/api/Crunch/page-3')
          .then((res) => console.log(res))
          .catch((err) => console.log(err))
      })
      .catch((err) => console.log(err))
  })
  .catch((err) => console.log(err))

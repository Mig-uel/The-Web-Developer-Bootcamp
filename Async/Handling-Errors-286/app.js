const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500

    setTimeout(() => {
      if (delay > 2000) reject('Connection Timeout!')
      resolve(`Here is your fake data from: ${url}`)
    }, delay)
  })
}

async function makeTwoFakeRequests() {
  try {
    let data = await fakeRequest('https://google.com/api/page-1')
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

const fakeRequestCallback = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 4500) + 500

  setTimeout(() => {
    if (delay > 4000) failure('Connection Timeout!')
    else success(`Here is your fake data from ${url}`)
  }, delay)
}

fakeRequestCallback(
  'https://google.com/page1',
  (res) => {
    alert(res)
    fakeRequestCallback(
      'https://google.com/page2',
      (res) => {
        alert(res)
        fakeRequestCallback(
          'https://google.com/page3',
          (res) => alert(res),
          (err) => alert(err)
        )
      },
      (err) => alert(err)
    )
  },
  (err) => alert(err)
)

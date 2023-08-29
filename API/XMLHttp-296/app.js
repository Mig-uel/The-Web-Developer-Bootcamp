// old way of requesting from an api endpoint

const req = new XMLHttpRequest()

req.onload = () => {
  console.log('LOADED:')
  const data = JSON.parse(req.response)

  console.log(data)
}

req.onerror = () => console.log(req)

req.open('GET', 'https://swapi.dev/api/people/1')
req.send()

// fetch('https://swapi.dev/api/people/1/')
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err))

const loadSWAPI = async () => {
  try {
    const res = await fetch('https://swapi.dev/api/people/1/')
    const data = await res.json()

    console.log(data)
  } catch (error) {
    console.log(error.message)
  }
}

loadSWAPI()

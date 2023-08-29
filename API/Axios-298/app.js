// axios
//   .get('https://swapi.dev/api/people/1')
//   .then(({ data }) => console.log(data))
//   .catch((e) => console.log(e))

const getSWAPIPerson = async (id) => {
  try {
    const req = await axios.get(`https://swapi.dev/api/people/${id}`)
    const { data } = req

    console.log(data)
  } catch (e) {
    console.log(e)
  }
}

getSWAPIPerson(2)

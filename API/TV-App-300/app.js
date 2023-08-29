const form = document.querySelector('#searchForm')
const container = document.querySelector('#container')

form.addEventListener('submit', async (event) => {
  event.preventDefault()

  const searchTerm = form.elements.query.value

  if (searchTerm) {
    try {
      const config = { params: { q: searchTerm } }
      const req = await axios.get(`http://api.tvmaze.com/search/shows`, config)
      const { data } = req
      console.log(data)

      generateTVDiv(data)

      form.elements.query.value = ''
    } catch (error) {
      console.log(error)
    }
  }
})

const generateTVDiv = (shows) => {
  for (let show of shows) {
    const div = document.createElement('DIV')
    const h3 = document.createElement('H3')
    const img = document.createElement('IMG')

    div.className = 'shows'
    h3.textContent = show.show.name

    if (show.show.image) img.src = show.show.image.medium

    div.append(h3)
    div.append(img)
    container.append(div)
  }
}

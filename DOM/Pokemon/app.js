// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container')
const url =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

for (let i = 1; i <= 151; i++) {
  const div = document.createElement('div')

  const sprite = document.createElement('img')
  sprite.src = `${url}${i}.png`

  const span = document.createElement('span')
  span.textContent = `Pokemon #${i}`

  div.append(sprite)
  div.append(span)

  container.append(div)
}

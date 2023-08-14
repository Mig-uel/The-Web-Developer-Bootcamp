const container = document.querySelector('#container')
const button = container.querySelector('button')

const randColor = () => {
  const r = Math.floor(Math.random() * 255)
  const g = Math.floor(Math.random() * 255)
  const b = Math.floor(Math.random() * 255)

  return `rgb(${r},${g},${b})`
}

button.addEventListener('click', (e) => {
  e.stopPropagation()
  container.style.backgroundColor = randColor()
})

container.addEventListener('click', () => {
  container.classList.toggle('hide')
})

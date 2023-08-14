const btn = document.querySelector('button').addEventListener('click', (e) => {
  console.log(e)
})

const input = document.querySelector('input')
input.addEventListener('keydown', (e) => {
  console.log(e.key)
})

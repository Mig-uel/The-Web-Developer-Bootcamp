const form = document.querySelector('#shelterForm')
const input = form.querySelector('input')
let ul = document.querySelector('#catList')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const li = document.createElement('li')
  li.textContent = input.value
  ul.append(li)
  input.value = ''
})

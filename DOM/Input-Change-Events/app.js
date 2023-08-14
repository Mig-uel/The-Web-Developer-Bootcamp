const input = document.querySelector('input')
const h1 = document.querySelector('h1')

// input.addEventListener('change', () => {
//   console.log(input.value)
// })

input.addEventListener('input', () => {
  h1.textContent = input.value

  if (input.value === '') h1.textContent = 'Hello'
})

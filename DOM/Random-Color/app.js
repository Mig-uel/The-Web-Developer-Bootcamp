const body = document.querySelector('body')
const btn = document.querySelector('#btn')
const rgb = document.querySelector('#rgb')

const randomColor = () => {
  let num1 = Math.floor(Math.random() * 255) + 1
  let num2 = Math.floor(Math.random() * 255) + 1
  let num3 = Math.floor(Math.random() * 255) + 1

  body.style.backgroundColor = `rgb(${num1},${num2},${num3})`
  rgb.textContent = `rgb(${num1},${num2},${num3})`
}

btn.addEventListener('click', randomColor)

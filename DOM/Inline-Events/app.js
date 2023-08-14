const button = document.querySelector('#v2')

button.onclick = function () {
  console.log('You clicked me!')
  console.log('I hope it works...')
}

function scream() {
  console.log('Ahhhhhh')
  console.log('Stop touching me')
}

button.onmouseenter = scream // passing the function, not executing. executed when button is pressed

document.querySelector('h1').onmouseenter = function () {
  alert('you entered the h1')
}

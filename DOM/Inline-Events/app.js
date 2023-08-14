const v2 = document.querySelector('#v2')
function scream() {
  alert('AHHHHH, stop touching me')
}
v2.onclick = function () {
  alert('Button v2')
}
v2.onmouseenter = scream // passing the function, not executing. executed when button is pressed

document.querySelector('h1').onmouseenter = function (e) {
  e.target.style.border = '1px solid red'
}

document.querySelector('h1').onmouseleave = function (e) {
  e.target.style.border = ''
}

const v3 = document.querySelector('#v3')

v3.addEventListener('click', () => {
  alert('Button v3')
})

function twist() {
  alert('TWIST')
}
function shout() {
  alert('SHOUT')
}

const v4 = document.querySelector('#v4')
v4.addEventListener('click', twist, { once: true }) // options at the end
v4.addEventListener('click', shout)

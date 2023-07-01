let max = parseInt(prompt('Enter a maximum number: '))

while (!max) {
  max = parseInt(prompt('Enter a valid number: '))
}
const targetNumber = Math.floor(Math.random() * max + 1)

let guess = parseInt(prompt('Enter your first guess: '))
let tries = 1

while (guess !== targetNumber) {
  guess = parseInt(prompt('Wrong guess, try again. Enter another guess: '))
  tries++
}

alert(`Congrats! You guessed right and it only took you ${tries} tries.`)

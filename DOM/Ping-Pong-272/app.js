const p1 = {
  score: 0,
  button: document.querySelector('#p1Button'),
  display: document.querySelector('#p1'),
}

const p2 = {
  score: 0,
  button: document.querySelector('#p2Button'),
  display: document.querySelector('#p2'),
}

const resetButton = document.querySelector('#reset')
const max = document.querySelector('#max')

// disable buttons at start
p1.button.disabled = true
p2.button.disabled = true

let winningScore = null
let isGameOver = false

const updateScores = (player, opponent) => {
  if (!isGameOver) {
    player.score += 1

    if (player.score === winningScore) {
      isGameOver = true

      player.display.classList.add('has-text-success')
      opponent.display.classList.add('has-text-danger')

      player.button.disabled = true
      opponent.button.disabled = true
    }

    player.display.textContent = player.score
  }
}

p1.button.addEventListener('click', () => updateScores(p1, p2))
p2.button.addEventListener('click', () => updateScores(p2, p1))

const reset = () => {
  isGameOver = false

  for (let p of [p1, p2]) {
    p.score = 0
    p.display.textContent = p.score
    p.display.classList.remove('has-text-success', 'has-text-danger')
    p.button.disabled = false
  }
}

max.addEventListener('change', () => {
  winningScore = parseInt(max.value) // can use 'this' instead of 'max' if i used regular function, no arrow
  reset()
})

resetButton.addEventListener('click', reset)

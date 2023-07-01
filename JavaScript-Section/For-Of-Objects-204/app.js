const testScores = {
  keenan: 80,
  damon: 67,
  kim: 89,
  shawn: 91,
  marlon: 72,
  dwayne: 77,
  nadia: 83,
  elvira: 97,
  diedre: 81,
  vonnie: 60,
}

for (let person in testScores) console.log(testScores[person])

console.log('\n')

/* -------------------------------- */
let sum = 0
let scores = Object.values(testScores) // array of scores from object

for (let score of scores) {
  sum += score
}

console.log(`Average of test scores: ${sum / scores.length}`)

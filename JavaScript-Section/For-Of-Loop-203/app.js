const subreddits = [
  'cringe',
  'books',
  'chickens',
  'funny',
  'pics',
  'soccer',
  'gunners',
]

for (let subreddit of subreddits) console.log(subreddit)
console.log('\n')

/* --------------------------------------------------------------------------- */

const seatingChart = [
  ['Kristen', 'Erik', 'Namita'],
  ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
  ['Yuma', 'Sakura', 'Jack', 'Erika'],
]

let rowNum = 1

for (let row of seatingChart) {
  console.log(`----- Row ${rowNum} ------ `)

  for (let student of row) {
    console.log(student)
  }
  rowNum++
}
console.log('\n')

/* --------------------------------------------------------------------------- */

for (let char of 'Hello, World!') console.log(char)

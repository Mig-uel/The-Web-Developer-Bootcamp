// DEFAULT PARAMETERS

// function rollDie(numSides) {
//   if (numSides === undefined) numSides = 6
//   return Math.floor(Math.random() * numSides) + 1
// }

function rollDie(numSides = 6) {
  return Math.floor(Math.random() * numSides) + 1
}

// Spread
const arr = [1, 2, 3]
const arr2 = [4, 5, 6]
const combArr = [...arr, ...arr2]

// Spread with Objects
const feline = { legs: 4, family: 'Felidae' }
const canine = { isFurry: true, family: 'Canine' }
const catDog = { ...feline, ...canine }

// Rest Params
function sum(...nums) {
  return nums.reduce((total, el) => total + el)
}

function raceResults(gold, silver, ...everyoneElse) {
  console.log(`GOLD MEDAL GOES TO: ${gold}`)
  console.log(`SILVER MEDAL GOES TO: ${silver}`)
  console.log(`AND THANKS TO EVERYONE ELSE: ${everyoneElse}`)
}

// Destructuring Arrays
const scores = [929321, 899341, 888336, 772739, 543671, 243567, 111934]

const [gold, silver, bronze, ...people] = scores

// Destructuring Objects
const user = {
  email: 'harvey@gmail.com',
  password: 'sCoTt1948',
  firstName: 'Harvey',
  lastName: 'Milk',
  born: 1930,
  died: 1978,
  bio: 'Harvey Bernard Milk was an American politician...',
  city: 'San Francisco',
  state: 'California',
}

const { email, password, died: deathYear } = user

// Destructuring Params
function fullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`
}

console.log(fullName(user))

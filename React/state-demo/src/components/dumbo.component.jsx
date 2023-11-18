import { useState } from 'react'

const generateGameBoard = () => {
  console.log('INTIAL GAME BOARD CREATED')
  return Array(5000)
}

const Dumbo = () => {
  const [board, setBoard] = useState(generateGameBoard) // passing function without calling it () so react runs it once instead of re running it

  return (
    <button onClick={() => setBoard('HEllO!')}>Click me to change state</button>
  )
}

export default Dumbo

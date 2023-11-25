import { useState } from 'react'

const ScoreKeeper = () => {
  const [scores, setScores] = useState({ p1: 0, p2: 0 })

  const increaseP1 = () =>
    setScores((oldScores) => ({ ...oldScores, p1: oldScores.p1 + 1 })) // callback function to access older version of state

  const increaseP2 = () =>
    setScores((oldScores) => ({ ...oldScores, p2: oldScores.p2 + 1 }))

  return (
    <div>
      <p>Player 1: {scores.p1}</p>
      <p>Player 2: {scores.p2}</p>

      <button onClick={increaseP1}>+1 Player 1</button>
      <button onClick={increaseP2}>+1 Player 2</button>
    </div>
  )
}

export default ScoreKeeper

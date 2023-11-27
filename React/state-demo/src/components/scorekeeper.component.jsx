import { useState } from 'react'

const ScoreKeeper = ({ numPlayers = 3, target = 3 }) => {
  const [players, setPlayers] = useState(new Array(numPlayers).fill(0))

  const increaseScore = (i) =>
    setPlayers((oldPlayers) => {
      return oldPlayers.map((p, index) => {
        if (index === i) return p + 1
        else return p
      })
    })

  const reset = () => setPlayers(Array(numPlayers).fill(0))

  return (
    <div>
      <ul>
        {players.map((p, i) => (
          <>
            <li key={i}>
              Player {i + 1}: {p}
              <button onClick={() => increaseScore(i)}>+1</button>
              {p >= target && <p>WINNER!</p>}
            </li>
          </>
        ))}
      </ul>
      <button onClick={reset}>Reset Scores</button>
    </div>
  )
}

export default ScoreKeeper

import { Rating } from '@mui/material'
import { useState } from 'react'

const RatingDemo = () => {
  const [score, setScore] = useState(3)

  return (
    <div>
      <h1>Rating Demo</h1>
      <h2>Score: {score}</h2>

      <Rating
        name='simple-controlled'
        value={score}
        onChange={(event, newValue) => {
          setScore(newValue)
        }}
      />
    </div>
  )
}

export default RatingDemo

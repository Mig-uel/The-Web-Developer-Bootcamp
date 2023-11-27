import { useState } from 'react'
import Box from './box.component'

const BoxGrid = ({ numBoxes = 9 }) => {
  const [boxes, setBoxes] = useState(Array.from({ length: 9 }, () => false))

  const reset = () => setBoxes(Array.from({ length: 9 }, () => false))

  const toggleBox = (index) =>
    setBoxes((oldBoxes) => {
      return oldBoxes.map((b, i) => {
        if (i === index) return !b
        else return b
      })
    })

  return (
    <>
      <div className='BoxGrid'>
        {boxes.map((b, i) => (
          <Box key={i} isActive={b} handleClick={() => toggleBox(i)} />
        ))}
      </div>
      <button onClick={reset}>Reset</button>
    </>
  )
}

export default BoxGrid

import { useState } from 'react'

const Toggler = () => {
  const [isHappy, setIsHappy] = useState(true)

  const toggleIsHappy = () => setIsHappy(!isHappy)

  return (
    <h1 onClick={toggleIsHappy} style={{ cursor: 'pointer' }}>
      {isHappy ? '😊' : '😭'}
    </h1>
  )
}

export default Toggler

import { useState } from 'react'

const Toggler = () => {
  const [isHappy, setIsHappy] = useState(true)
  const [count, setCount] = useState(0)

  const toggleIsHappy = () => setIsHappy(!isHappy)

  return (
    <>
      <h1 onClick={toggleIsHappy} style={{ cursor: 'pointer' }}>
        {isHappy ? '😊' : '😭'}
      </h1>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  )
}

export default Toggler

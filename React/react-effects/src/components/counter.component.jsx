import { useState, useEffect } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  const increment = () => setCount((oldCount) => oldCount + 1)

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+1</button>
    </div>
  )
}

export default Counter

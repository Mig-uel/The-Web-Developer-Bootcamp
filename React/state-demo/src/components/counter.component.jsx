import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  const addOne = () => setCount(count + 1)
  const addThree = () => {
    // setCount((c) => c + 1) // callback returns current value
    setCount(count + 3)
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={addOne}>+1</button>
      <button onClick={addThree}>+3</button>
    </div>
  )
}

export default Counter

import { useState, useEffect } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  const [name, setName] = useState('')

  useEffect(() => {
    console.log('EFFECT CALLED')
  }, [])

  const increment = () => setCount((oldCount) => oldCount + 1)
  const handleChange = (e) => setName(e.target.value)

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+1</button>

      <p>{name}</p>
      <input type='text' value={name} onChange={handleChange} />
    </div>
  )
}

export default Counter

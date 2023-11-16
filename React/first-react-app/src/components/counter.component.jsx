import { useState } from 'react'

const Counter = () => {
  const [num, setNum] = useState(0)

  const changeNum = () => setNum(num + 1)

  return (
    <div>
      <h2>The count is: {num}</h2>
      <button onClick={changeNum}>Click</button>
    </div>
  )
}

export default Counter

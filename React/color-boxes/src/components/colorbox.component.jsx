import { useState } from 'react'
import { randomColor } from '../utils/randomcolor'

import '../styles/colorbox..css'

const ColorBox = ({ color, colors }) => {
  const [colorState, setColorState] = useState(color)

  const handleClick = () => setColorState(colors[randomColor()])

  return (
    <div
      style={{ backgroundColor: colorState }}
      className='colorbox'
      onClick={handleClick}
    ></div>
  )
}

export default ColorBox

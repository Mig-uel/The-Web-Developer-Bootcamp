import ColorBox from './colorbox.component'
import { colors } from '../colors'
import '../styles/colorbox..css'

import { randomColor } from '../utils/randomcolor'

const ColorBoxes = () => {
  return (
    <div className='colorboxes-container'>
      {colors.map((c) => (
        <ColorBox key={c} color={colors[randomColor()]} colors={colors} />
      ))}
    </div>
  )
}

export default ColorBoxes

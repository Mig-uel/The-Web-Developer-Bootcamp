import { useState } from 'react'
import '../styles/box.css'

const Box = ({ isActive, handleClick }) => {
  return (
    <div
      onClick={handleClick}
      className='Box'
      style={{ background: isActive ? 'red' : 'black' }}
    ></div>
  )
}

export default Box

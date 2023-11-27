import '../styles/die.css'

const Die = ({ val, color = 'slateblue' }) => {
  return (
    <div className='Die' style={{ backgroundColor: color }}>
      {val}
    </div>
  )
}

export default Die

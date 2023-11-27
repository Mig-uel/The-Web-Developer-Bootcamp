import '../styles/button.css'

const Button = ({ handleClick, children }) => {
  return (
    <button onClick={handleClick} className='Button'>
      {children}
    </button>
  )
}

export default Button

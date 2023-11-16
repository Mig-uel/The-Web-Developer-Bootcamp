const Clicker = ({ message, label }) => {
  const handleClick = () => alert(message)
  // const handleHover = (e) => console.log('hovered', e)

  return (
    <div>
      {/* <h1 onMouseOver={handleHover}>Click the Button!</h1> */}
      <button onClick={handleClick}>{label}</button>
    </div>
  )
}

export default Clicker

const Clicker = () => {
  const handleClick = () => console.log('clicked')
  const handleHover = (e) => console.log('hovered', e)

  return (
    <div>
      <h1 onMouseOver={handleHover}>Click the Button!</h1>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default Clicker

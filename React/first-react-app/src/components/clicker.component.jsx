const Clicker = () => {
  const handleClick = () => console.log('clicked')
  return (
    <div>
      <h1>Click the Button!</h1>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default Clicker

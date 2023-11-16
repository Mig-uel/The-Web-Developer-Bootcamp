const ColorList = ({ colors }) => {
  return (
    <div>
      <h1>Color List:</h1>
      <ul>
        {colors.map((color) => (
          <li style={{ color }} key={color}>
            {color}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ColorList

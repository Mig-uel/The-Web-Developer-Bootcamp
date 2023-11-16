const ListPicker = ({ values }) => {
  const randIndex = Math.floor(Math.random() * values.length)
  const randElement = values[randIndex]

  return (
    <div>
      <p>The list of values: {randElement}</p>
    </div>
  )
}

export default ListPicker

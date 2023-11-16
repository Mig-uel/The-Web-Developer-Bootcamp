const DoubleDice = () => {
  const num1 = Math.floor(Math.random() * 3) + 1
  const num2 = Math.floor(Math.random() * 3) + 1

  // const styles = { color: num1 === num2 ? 'green' : 'red' }
  const win = { color: 'green' }
  const lose = { color: 'red' }

  return (
    <div>
      <p>Num 1: {num1}</p>
      <p>Num 2: {num2}</p>
      {num1 === num2 ? (
        <h2 style={win}>You win :)</h2>
      ) : (
        <h2 style={lose}>You lose :(</h2>
      )}
      {/* {num1 == num2 && <h2>Yaaay!</h2>} */}
      <p>------------------------------------------ </p>
    </div>
  )
}

export default DoubleDice

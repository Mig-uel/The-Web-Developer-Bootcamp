const DoubleDice = () => {
  const num1 = Math.floor(Math.random() * 3) + 1
  const num2 = Math.floor(Math.random() * 3) + 1

  return (
    <div>
      <p>Num 1: {num1}</p>
      <p>Num 2: {num2}</p>
      {num1 === num2 ? <h2>You win :)</h2> : <h2>You lose :(</h2>}
      {num1 == num2 && <h2>Yaaay!</h2>}
    </div>
  )
}

export default DoubleDice

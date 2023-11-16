const Slots = ({ x, y, z }) => {
  const isWinner = x === y && x === z
  return (
    <div>
      <h2>
        {x},{y},{z}
      </h2>

      {isWinner ? (
        <h3 style={{ color: 'green' }}>Winner!</h3>
      ) : (
        <h3 style={{ color: 'red' }}>Loser!</h3>
      )}
      {isWinner && <h3>Congrats!</h3>}
    </div>
  )
}

export default Slots

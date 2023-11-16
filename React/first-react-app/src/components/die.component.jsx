const Die = ({ sides = 6 }) => {
  const roll = Math.floor(Math.random() * sides) + 1

  return (
    <p>
      {sides}-sided die roll: {roll}
    </p>
  )
}

export default Die

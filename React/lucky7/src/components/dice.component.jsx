import Die from './die.component'
import '../styles/dice.css'

const Dice = ({ dice, color }) => {
  return (
    <section className='Dice'>
      {dice.map((v, i) => (
        <Die key={i} val={v} color={color} />
      ))}
    </section>
  )
}

export default Dice

import LuckyN from './components/luckyN.component'
import { sum } from './utils/utils'

const lessThan4 = (dice) => sum(dice) < 4
const allSameValues = (dice) => dice.every((v) => v === dice[0])

function App() {
  return (
    <>
      <LuckyN winCheck={lessThan4} />
      <LuckyN winCheck={allSameValues} />
    </>
  )
}

export default App

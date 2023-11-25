import './App.css'
import Counter from './components/counter.component'
import Dumbo from './components/dumbo.component'
import ScoreKeeper from './components/scorekeeper.component'

function App() {
  return (
    <>
      <h1>State Demo</h1>
      <Counter />

      <h1>Dumbo</h1>
      <Dumbo />

      <h1>ScoreKeeper</h1>
      <ScoreKeeper />
    </>
  )
}

export default App

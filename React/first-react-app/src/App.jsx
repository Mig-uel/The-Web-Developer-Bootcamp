import './App.css'
import Die from './components/die.component'
import DoubleDice from './components/doubledice.component'
import Greeter from './components/greeter.component'
import ListPicker from './components/listpicket.component'

function App() {
  return (
    <>
      {/* <Greeter name='Miguel' from='Mercedes' />
      <Die sides={20} />
      <ListPicker values={[1, 2, 3, 4, 5]} /> */}

      <DoubleDice />
      <DoubleDice />
      <DoubleDice />
      <DoubleDice />
    </>
  )
}

export default App

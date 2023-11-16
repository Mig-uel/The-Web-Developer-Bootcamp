import './App.css'
import Die from './components/die.component'
import DoubleDice from './components/doubledice.component'
import Greeter from './components/greeter.component'
import Heading from './components/heding.component'
import ListPicker from './components/listpicket.component'
import ColorList from './components/colorlist.component'

function App() {
  return (
    <>
      {/* <Heading color='magenta' text={'Welcome!'} /> */}
      {/* <Greeter name='Miguel' from='Mercedes' />
      <Die sides={20} />
      <ListPicker values={[1, 2, 3, 4, 5]} /> */}

      {/* <DoubleDice />
      <DoubleDice />
      <DoubleDice />
      <DoubleDice /> */}

      <ColorList colors={['red', 'pink', 'purple', 'teal']} />
    </>
  )
}

export default App

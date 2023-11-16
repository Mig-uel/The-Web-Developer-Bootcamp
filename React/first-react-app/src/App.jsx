import './App.css'
import Die from './components/die.component'
import DoubleDice from './components/doubledice.component'
import Greeter from './components/greeter.component'
import Heading from './components/heding.component'
import ListPicker from './components/listpicket.component'
import ColorList from './components/colorlist.component'
import ShoppingList from './components/shoppinglist.component'
import data from './assets/data'
import Clicker from './components/clicker.component'
import Counter from './components/counter.component'
import Toggler from './components/toggler.component'

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

      {/* <ColorList colors={['red', 'pink', 'purple', 'teal']} /> */}

      {/* <h1>Shopping List</h1>
      <ShoppingList items={data} /> */}
      {/* <Clicker message='STOP CLICKING ME!' label='DO NOT CLICK' /> */}

      {/* <Counter /> */}

      <Toggler />
    </>
  )
}

export default App

import './App.css'
import Die from './components/die.component'
import DoubleDice from './components/doubledice.component'
import Greeter from './components/greeter.component'
import Heading from './components/heding.component'
import ListPicker from './components/listpicket.component'
import ColorList from './components/colorlist.component'
import ShoppingList from './components/shoppinglist.component'

function App() {
  const data = [
    { item: 'eggs', qty: 12, completed: false },
    { item: 'milk', qty: 1, completed: true },
    { item: 'chicken breasts', qty: 4, completed: false },
    { item: 'eggs', qty: 6, completed: true },
  ]

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
      <ShoppingList items={data} />
    </>
  )
}

export default App

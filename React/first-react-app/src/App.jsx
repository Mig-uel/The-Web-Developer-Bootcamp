import './App.css'
import Die from './components/die.component'
import Greeter from './components/greeter.component'

function App() {
  return (
    <>
      <Greeter name='Miguel' from='Mercedes' />

      <Die sides={20} />
    </>
  )
}

export default App

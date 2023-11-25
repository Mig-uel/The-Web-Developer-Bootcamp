import './App.css'
import Counter from './components/counter.component'
import Dumbo from './components/dumbo.component'
import EmojiClicker from './components/emojiclicker.component'
import ScoreKeeper from './components/scorekeeper.component'

function App() {
  return (
    <>
      {/* <h1>State Demo</h1>
      <Counter />

      <h1>Dumbo</h1>
      <Dumbo />

      <h1>ScoreKeeper</h1>
      <ScoreKeeper /> */}

      <h1>Emoji Clicker</h1>
      <EmojiClicker />
    </>
  )
}

export default App

// these don't mutate the original array (aka create  new array from old array)
// add to an array: spread and add the new one literally
// removing from an array: use filter() method to filter out
// update all elements in an array: use map() method

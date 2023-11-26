import { useState } from 'react'
import { v4 as uuid } from 'uuid'

const EmojiClicker = () => {
  const [emojis, setEmojis] = useState([{ id: uuid(), emoji: '😊' }])

  const addEmoji = () =>
    setEmojis((oldEmojis) => [...oldEmojis, { id: uuid(), emoji: '😂' }]) // using callback to access older version of state

  const removeEmoji = (id) => {
    // console.log(id) // the id passed
    setEmojis((oldEmojis) => oldEmojis.filter((e) => e.id !== id)) // filters out the array from the id passed in and returns new array
  }

  const makeEverythingAHeart = () =>
    setEmojis((oldEmojis) => oldEmojis.map((e) => ({ ...e, emoji: '❤️' }))) // using callback to access older version of state, then mapping through each object element, and spreading contents (id) but updating the emoji property and returning it

  return (
    <div>
      {emojis.map((e) => (
        <span
          style={{ fontSize: '40px', cursor: 'pointer' }}
          key={e.id}
          onClick={() => removeEmoji(e.id)}
        >
          {e.emoji}
        </span>
      ))}
      <br />
      <p>(click an emoji to remove it)</p>
      <button onClick={addEmoji}>Add Emoji</button>
      <button onClick={makeEverythingAHeart}>❤️</button>
    </div>
  )
}

export default EmojiClicker

import { useEffect } from 'react'
import { useState } from 'react'

const Quotes = () => {
  const RANDOM_QUOTE_URL =
    'https://inspo-quotes-api.herokuapp.com/quotes/random'

  const [quote, setQuote] = useState('')
  const [author, setAuthor] = useState('')

  const fetchQuote = async () => {
    const res = await fetch(RANDOM_QUOTE_URL)
    const data = await res.json()

    setQuote(data.quote.text)
    setAuthor(data.quote.author)
  }

  useEffect(() => {
    ;(async () => {
      const res = await fetch(RANDOM_QUOTE_URL)
      const data = await res.json()

      setQuote(data.quote.text)
      setAuthor(data.quote.author)
    })()
  }, [])

  return (
    <div>
      <h1>{quote ? quote : 'No quote found...'}</h1>
      {author && <h2>- {author}</h2>}
      <button onClick={fetchQuote}>Get Quote Using Handler</button>
    </div>
  )
}

export default Quotes

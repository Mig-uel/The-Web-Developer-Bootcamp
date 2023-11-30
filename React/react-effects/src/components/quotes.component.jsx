import { useState, useEffect } from 'react'

const Quotes = () => {
  const RANDOM_QUOTE_URL =
    'https://inspo-quotes-api.herokuapp.com/quotes/random'

  const [quote, setQuote] = useState({})

  const fetchQuote = async () => {
    const res = await fetch(RANDOM_QUOTE_URL)
    const data = await res.json()
    // console.log(data)

    setQuote(data.quote)
  }

  useEffect(() => {
    fetchQuote()
  }, [])

  return (
    <div>
      <h1>{quote.text ? quote.text : 'No quote found...'}</h1>
      {quote.author && <h2>- {quote.author}</h2>}
      <button onClick={fetchQuote}>Get Quote</button>
    </div>
  )
}

export default Quotes

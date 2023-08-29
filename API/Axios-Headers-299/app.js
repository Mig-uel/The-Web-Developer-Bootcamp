const jokes = document.querySelector('#jokes')
const button = document.querySelector('button')

const getDadJoke = async () => {
  try {
    const config = { headers: { Accept: 'application/json' } }

    const req = await axios.get('https://icanhazdadjoke.com/', config)
    const { joke } = req.data

    const LI = document.createElement('LI')
    LI.textContent = joke

    jokes.append(LI)
  } catch (error) {
    console.log('NO AVAILABLE JOKES! SORRY :<')
  }
}

button.addEventListener('click', getDadJoke)

const Poke = () => {
  const randomNum = Math.floor(Math.random() * (151 - 1) + 1)
  console.log(randomNum)

  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randomNum}.png`

  return <img src={imgUrl} alt='' style={{ width: '130px' }} />
}

export default Poke

const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color
      resolve()
    }, delay)
  })
}

const rainbow = async () => {
  await delayedColorChange('red', 1000)
  await delayedColorChange('orange', 1000)
  await delayedColorChange('yellow', 1000)
  await delayedColorChange('green', 1000)
  await delayedColorChange('blue', 1000)
  await delayedColorChange('indigo', 1000)
  await delayedColorChange('violet', 1000)

  return 'ALL DONE!'
}

// rainbow().then((data) => console.log('END OF RAINBOW!', data))
const afterRainbow = async () => {
  let data = await rainbow()

  console.log(data)
}

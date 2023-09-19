import { franc, francAll } from 'franc'
import langs from 'langs'
import { argv } from 'node:process'

const userInput = argv[2]

const langCode = franc(userInput)

if (langCode === 'und') {
  console.log(
    'Sorry, there was no best language guess for your phrase. Please try another phrase.'
  )
} else {
  const language = langs.where('3', langCode)

  console.log(`Probable Language: ${language.name}`)
}

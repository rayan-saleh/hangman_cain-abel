import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Keypad from './components/Keypad'
import Word from './components/Word'
import Man from './components/Man'

const wordBank = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
let guessedLetters: string[] = ['t', 's']



function App() {
  const number = 1
  const [count, setCount] = useState(0)
  const [numberOfWrongGuesses, setNumberOfWrongGuesses] = useState(0)
  const [chosenWord, setChosenWord] = useState('');

    useEffect(() => {
      setChosenWord(wordBank[Math.floor(Math.random() * wordBank.length)]); //setChosenWordTo:
    }, []); //empty useEffect array means it only runs once on reload


  const handleClick = () => {
    setCount((count) => count + 1)
    console.log({count})
    for (let i = 0; i < chosenWord.length; i++) {
      if ("x" === chosenWord[i]) {
        console.log('correct guess')
      } else {
        console.log('incorrect guess')
        setNumberOfWrongGuesses((numberOfWrongGuesses) => numberOfWrongGuesses + 1) 
      }
    }

      
  };


  return (
    <div>
      <Man numberOfGuesses ={ number }  />
      <Word guessedLetters = { guessedLetters } chosenWord = {chosenWord}/> 
      <Keypad onClickButton = {handleClick}/> 
    </div>
  )


}

export default App

import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Keypad from './components/Keypad'
import Word from './components/Word'
import Man from './components/Man'

const wordBank = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

//react function but in arrow notation vs function App() { return
const RandomWord = () => {
  //cosenWord is the state variable
  const [chosenWord, setChosenWord] = useState('');

  useEffect(() => {
    setChosenWord(wordBank[Math.floor(Math.random() * wordBank.length)]); //setChosenWordTo:
  }, []); //empty useEffect array means it only runs once on reload

  return (
    <div>
      {chosenWord}
    </div>
  );
};


function App() {
  const [count, setCount] = useState(0)
  let numberOfWrongGuesses: number = 0

  const handleClick = () => {
    setCount((count) => count + 1)
    console.log({count})
    // ifnot match selected word, increase number of wrong guesses

  };

  const handleCountIncrease = () => {
    
    // ifnot match selected word, increase number of wrong guesses

  };

  return (
    <div>
      <RandomWord />
      <Man onWrongGuess = {handleClick}/>
      <Word /> 
      <Keypad onClickButton = {handleClick}/> 
    </div>
  )
}

export default App

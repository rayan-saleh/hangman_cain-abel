export default function Word({guessedLetters}: any, {chosenWord}: any){
  const word = "test"
  // const guessedLetters = ["t", "s"]
    return (
      //center all of the letters in tailwind
      <div className="flex justify-center underline">
       {chosenWord.split("").map((letter: string, index: number) => (
          <span key={index}>
          <span style ={{visibility: guessedLetters.includes(letter) ? "visible" : "hidden"}}>
            
            {letter}
          
          </span>
          </span>
       )
      )}
      </div>
      )
    }
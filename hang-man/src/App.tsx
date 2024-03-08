import { useState } from 'react'
import words from "./WordList.json"
import {HangmanDrawing} from "./Components/HangManDrawing"
import HangManWord from "./Components/HangManWord"
import Keyboard from "./Components/KeyBoard"
import './App.css'

function App() {
  const [wordToGuess,setWordToGuess] = useState<string>(() => {
    return words[Math.floor(Math.random()*words.length)]
  });
  const [guessedLetters,setGuessedLetters] = useState<string[]>([])
console.log(wordToGuess)
  return (
    <div style={{
      maxWidth: "800px",
      display: "flex",
      flexDirection: "column",
      gap: "2rem",
      margin: "0 auto",
      alignItems: "center",
}}>
    
   <HangmanDrawing/>

     
    </div>
  )
}

export default App

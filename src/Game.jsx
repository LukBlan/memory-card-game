import {useState} from "react";
import {StartScreen} from "./StartScreen.jsx";

const difficulties = [
  { name: "Easy", cards: 3 },
  { name: "Normal", cards: 4 },
  { name: "Hard", cards: 5 },
]

function Game() {
  const [currentDifficulty, setCurrentDifficulty] = useState(null)
  const changeCurrentDifficulty = (difficulty) => () => setCurrentDifficulty(difficulty)

  return (
    <>
      <StartScreen difficulties={difficulties} onDifficultyChange={changeCurrentDifficulty}></StartScreen>
    </>
  )
}

export { Game }
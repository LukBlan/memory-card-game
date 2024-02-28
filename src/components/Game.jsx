import {useState} from "react";
import {StartScreen} from "./StartScreen.jsx";
import {GameScreen} from "./GameScreen.jsx";

const difficulties = [
  { name: "Easy", cards: 3 },
  { name: "Normal", cards: 4 },
  { name: "Hard", cards: 5 },
]

function Game() {
  const [currentDifficulty, setCurrentDifficulty] = useState(null)
  const changeCurrentDifficulty = (difficulty) => () => setCurrentDifficulty(difficulty)

  const userChooseDifficulty = currentDifficulty !== null

  return (
    <>
      {userChooseDifficulty ?
      <GameScreen onGameOver={changeCurrentDifficulty} difficulty={currentDifficulty} /> :
      <StartScreen difficulties={difficulties} onDifficultyChange={changeCurrentDifficulty} />}
    </>
  )
}

export { Game }
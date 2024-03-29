import {useState} from "react";
import {StartScreen} from "./StartScreen.jsx";
import {GameScreen} from "./GameScreen.jsx";

const difficulties = [
  { name: "Easy", cards: 3 },
  { name: "Normal", cards: 4 },
  { name: "Hard", cards: 5 },
]

function Game({onScoreChange, score, onScoreReset}) {
  const [currentDifficulty, setCurrentDifficulty] = useState(null)
  const changeCurrentDifficulty = (difficulty) => () => setCurrentDifficulty(difficulty)
  const userChooseDifficulty = currentDifficulty !== null

  return (
    <>
      {userChooseDifficulty ?
      <GameScreen score={score}
                  onScoreChange={onScoreChange}
                  onGameOver={changeCurrentDifficulty}
                  difficulty={currentDifficulty}
                  onScoreReset={onScoreReset} />
        :
      <StartScreen difficulties={difficulties} onDifficultyChange={changeCurrentDifficulty} />}
    </>
  )
}

export { Game }
import {Game} from "./Game.jsx";
import {ScoreBoard} from "./ScoreBoard.jsx";
import {useState} from "react";

function App() {
  const [scoreObject, setScoreObject] = useState({score: 0, maxScore: 0})
  const score = scoreObject.score

  const resetScore = () => setScoreObject({...scoreObject, score: 0})

  function changeScore() {
    const newScore = score + 1;
    const updateMaxScore = newScore > scoreObject.maxScore;
    const newObject = {...scoreObject, score: newScore}

    if (updateMaxScore) {
      newObject.maxScore = newScore
    }

    setScoreObject(newObject)
  }


  return (
    <>
      <ScoreBoard scoreObject={scoreObject}/>
      <header>
        <h1>Memory Game</h1>
      </header>
      <Game score={score} onScoreChange={changeScore} onScoreReset={resetScore}/>
    </>
  )
}

export { App }

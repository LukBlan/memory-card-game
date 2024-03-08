function ScoreBoard({scoreObject}) {
  return (
    <div className="score-board">
      <p className="score-board-text">
        Max Score: {scoreObject.maxScore}
      </p>
      <p className="score-board-text">
        Current score: {scoreObject.score}
      </p>
    </div>
  )

}

export {ScoreBoard}
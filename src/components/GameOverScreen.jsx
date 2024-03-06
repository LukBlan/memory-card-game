function GameOverScreen({onReturnToMainScreen, onRetry}) {
  return (
    <div className="game-over-screen">
      <p>You Loose</p>
      <button className="game-over-button" onClick={onRetry}>
        Retry
      </button>
      <button className="game-over-button" onClick={onReturnToMainScreen}>
        Return
      </button>
    </div>
  )
}

export {GameOverScreen}
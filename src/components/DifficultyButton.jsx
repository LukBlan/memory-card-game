function DifficultyButton({ difficulty, onClick}) {
  return <button className="difficulty-button" onClick={onClick}>{difficulty.name}</button>
}

export { DifficultyButton }
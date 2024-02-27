function DifficultyButton({ difficulty, onClick}) {
  return <button onClick={onClick}>{difficulty.name}</button>
}

export { DifficultyButton }
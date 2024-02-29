import {DifficultyButton} from "./DifficultyButton.jsx";

function StartScreen({difficulties, onDifficultyChange}) {
  return (
    <ul className="difficulty-buttons-list">
      {
        difficulties.map(difficulty => <DifficultyButton key={difficulty.name}
                                                         difficulty={difficulty}
                                                         onClick={onDifficultyChange(difficulty)} />)
      }
    </ul>
  )
}

export { StartScreen}
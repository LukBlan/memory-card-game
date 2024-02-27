import {DifficultyButton} from "./DifficultyButton.jsx";

function StartScreen({difficulties, onDifficultyChange}) {
  return (
    <>
      {
        difficulties.map(
          difficulty => <DifficultyButton key={difficulty.name} difficulty={difficulty} onClick={onDifficultyChange(difficulty)} />
        )
      }
    </>
  )
}

export { StartScreen}
import { useEffect, useState } from "react";
import { fetchAllPokemons } from "../domain/pokemons.js";

function GameScreen({ difficulty }) {
  const [playerLose, setPlayerLose] = useState(false)
  const [score, setScore] = useState(0)
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    const amountPokemonsToFetch = difficulty.cards
    fetchAllPokemons(amountPokemonsToFetch).then(result => setPokemons(result))
  }, [score]);

  console.log(pokemons.length)

  return (
    <>
      {
        playerLose ?
        <button>Retry</button> :
        <>
          {pokemons.map(pokemons => <img key={pokemons.name} src={pokemons.src} alt={pokemons.name} />) }
          <button onClick={() => setScore(score + 1)}>{difficulty.name} {pokemons.length}</button>
        </>
      }

    </>
  )
}

export { GameScreen }
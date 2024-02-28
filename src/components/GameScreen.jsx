import { useEffect, useState } from "react";
import { fetchAllPokemons } from "../domain/pokemons.js";
import {PokemonCard} from "./PokemonCard.jsx";

function GameScreen({ difficulty, onGameOver }) {
  const [playerLose, setPlayerLose] = useState(false)
  const [score, setScore] = useState(0)
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    const amountPokemonsToFetch = difficulty.cards
    fetchAllPokemons(amountPokemonsToFetch).then(result => setPokemons(result))
  }, [score]);

  return (
    <>
      {
        playerLose ?
          <>
            <button onClick={() => setPlayerLose(false)}>Retry</button>
            <button onClick={onGameOver(null)}>Return</button>
          </>
          :
          <>
            {pokemons.map(pokemon =>  <PokemonCard pokemon={pokemon}/> ) }
            <button onClick={() => setPlayerLose(true)}>{difficulty.name} {pokemons.length}</button>
          </>
      }

    </>
  )
}

export { GameScreen }
import { useEffect, useState } from "react";
import { fetchAllPokemons } from "../domain/pokemons.js";
import {PokemonCard} from "./PokemonCard.jsx";

function GameScreen({ difficulty, onGameOver }) {
  const [playerLose, setPlayerLose] = useState(false)
  const [score, setScore] = useState(0)
  const [pokemons, setPokemons] = useState([])
  const [selectedPokemons, setSelectedPokemons] = useState([])

  const selectPokemon = (pokemonName) => () => {
    if (selectedPokemons.includes(pokemonName)) {
      setPlayerLose(true)
    } else {
      setSelectedPokemons([...selectedPokemons, pokemonName])
      setScore(score + 1)
    }
  }

  useEffect(() => {
    const amountPokemonsToFetch = difficulty.cards
    fetchAllPokemons(amountPokemonsToFetch).then(result => setPokemons(result))
  }, [score]);

  return (
    <>
      {
        playerLose ?
          <>
            <p>You Loose</p>
            <button onClick={() => setPlayerLose(false)}>Retry</button>
            <button onClick={onGameOver(null)}>Return</button>
          </>
          :
          <>
            <p>Player score {score}</p>
            {pokemons.map(pokemon =>  <PokemonCard key={pokemon.name} onClick={selectPokemon} pokemon={pokemon}/> ) }
            <button onClick={() => setPlayerLose(true)}>
              {difficulty.name}
            </button>
          </>
      }

    </>
  )
}

export { GameScreen }
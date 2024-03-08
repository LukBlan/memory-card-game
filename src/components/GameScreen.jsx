import { useEffect, useState } from "react";
import { fetchAllPokemons } from "../domain/pokemons.js";
import {PokemonCard} from "./PokemonCard.jsx";
import {GameOverScreen} from "./GameOverScreen.jsx";
import {ScoreBoard} from "./ScoreBoard.jsx";

function GameScreen({ difficulty, onGameOver, onScoreChange, score }) {
  const [playerLose, setPlayerLose] = useState(false)
  const [pokemons, setPokemons] = useState([])
  const [selectedPokemons, setSelectedPokemons] = useState([])

  const changePlayerLose = () => setPlayerLose(false)

  const selectPokemon = (pokemonName) => () => {
    if (selectedPokemons.includes(pokemonName)) {
      setPlayerLose(true)
    } else {
      setSelectedPokemons([...selectedPokemons, pokemonName])
      onScoreChange()
    }
  }

  useEffect(() => {
    const amountPokemonsToFetch = difficulty.cards
    fetchAllPokemons(amountPokemonsToFetch).then(result => setPokemons(result))
  }, [score]);

  return (
    <>
      {
        playerLose ? <GameOverScreen onRetry={changePlayerLose} onReturnToMainScreen={onGameOver(null)}/> :
          <>
            <ul className="pokemons-card-list">
              {pokemons.map(pokemon =>  <PokemonCard key={pokemon.name} onClick={selectPokemon} pokemon={pokemon}/> ) }
            </ul>
          </>
      }
    </>
  )
}

export { GameScreen }
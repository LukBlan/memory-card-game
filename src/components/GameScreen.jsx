import { useEffect, useState } from "react";
import { getAmountRandomPokemons, fetchPokemon } from "../domain/pokemons.js";

function GameScreen({ difficulty }) {
  const [playerLose, setPlayerLose] = useState(false)
  const [score, setScore] = useState(0)
  const [pokemons, setPokemons] = useState([])

  async function fetchAll(pokemons) {
    const result = []
    const response = await Promise.all(pokemons.map(pokemonName => fetchPokemon(pokemonName)))

    response.forEach(promiseResponse => {result.push(
      {name: promiseResponse.forms[0].name, src: promiseResponse.sprites.front_default})}
    )
    return result;
  }

  useEffect(() => {
    const pokemonsOnScreen = getAmountRandomPokemons(difficulty.cards)
    fetchAll(pokemonsOnScreen).then(result => setPokemons(result))
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
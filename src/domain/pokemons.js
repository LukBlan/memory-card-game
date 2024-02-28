const url = "https://pokeapi.co/api/v2/pokemon/"

const pokemonList = [
  "bulbasaur", "charmander", "squirtle", "wartortle", "blastoise", "caterpie", "metapod", "butterfree",
  "weedle", "kakuna", "beedrill", "pidgey", "rattata", "spearow", "arbok", "pikachu"
]

function getRandomPokemon() {
  const randomIndex = Math.floor(Math.random() * pokemonList.length)
  return pokemonList[randomIndex]
}

function getAmountRandomPokemons(amount) {
  let randomPokemons = []

  while (randomPokemons.length !== amount) {
    const randomPokemon = getRandomPokemon()

    if (!randomPokemons.includes(randomPokemon)) {
      randomPokemons.push(randomPokemon)
    }
  }

  return randomPokemons;
}

async function fetchAllPokemons(amount) {
  const result = []
  const pokemons = getAmountRandomPokemons(amount)

  const response = await Promise.all(pokemons.map(pokemonName => fetchPokemon(pokemonName)))

  response.forEach(promiseResponse => {result.push(
    {name: promiseResponse.forms[0].name, src: promiseResponse.sprites.front_default})}
  )
  return result;
}

function fetchPokemon(pokemonName) {
  return fetch(url + pokemonName).then(result => result.json())
}

export { fetchAllPokemons }
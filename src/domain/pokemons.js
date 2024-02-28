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

function fetchPokemon(pokemonName) {
  return fetch(url + pokemonName).then(result => result.json())
}

export { getAmountRandomPokemons, fetchPokemon }
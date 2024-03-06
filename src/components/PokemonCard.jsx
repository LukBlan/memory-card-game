function PokemonCard({pokemon, onClick}) {
  return (
    <li className="pokemon-card" onClick={onClick(pokemon.name)}>
      <p>{pokemon.name}</p>
      <img src={pokemon.src} alt={pokemon.name}/>
    </li>
  )
}

export { PokemonCard }
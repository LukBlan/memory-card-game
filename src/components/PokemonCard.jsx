function PokemonCard({pokemon, onClick}) {
  const show = () => console.log(pokemon.name)

  return (
    <div onClick={onClick(pokemon.name)}>
      <p>{pokemon.name}</p>
      <img src={pokemon.src}/>
    </div>
  )
}

export { PokemonCard }
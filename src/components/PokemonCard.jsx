function PokemonCard({pokemon}) {
  const show = () => console.log(pokemon.name)

  return (
    <div onClick={show}>
      <p>{pokemon.name}</p>
      <img src={pokemon.src}/>
    </div>
  )
}

export { PokemonCard }
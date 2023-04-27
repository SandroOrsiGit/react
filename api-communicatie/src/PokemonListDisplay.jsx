export default function PokemonListDisplay({pokeList, onSelect}) {
    return(
        <ul>
        {pokeList.map((pokemon)=><li onClick={()=>onSelect(pokemon)}>{pokemon.name}</li>)}
        </ul>
    )
}
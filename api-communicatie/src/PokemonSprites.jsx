export default function PokemonSprites({pokemon}){
    return(
    <div>
        <img src={pokemon.sprites.front_shiny} alt="" />
        <img src={pokemon.sprites.back_shiny} alt="" />
    </div>
    )
}
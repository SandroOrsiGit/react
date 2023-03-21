export default function PokemonStats({pokemon}){
    return(
        <ul>
            {pokemon.stats.map((stat)=> <li>{stat.stat.name} : {stat.base_stat}</li>)}
        </ul>
    )
}
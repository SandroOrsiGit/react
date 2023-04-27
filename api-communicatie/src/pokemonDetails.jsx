import { useState, useEffect } from "react";
import PokemonSprites from "./PokemonSprites";
import PokemonStats from "./PokemonStats";
import usePokemonDetails from "./hooks/usePokemonDetails";

export default function PokemonDetails({selectedPokemon}){
    
    const [loading, selectedPokemonData] = usePokemonDetails(selectedPokemon)

    if(loading){
        return <p>Loading...</p>
    }
    return(
        
            <div>
                <h1>{selectedPokemon.name}</h1>
                {selectedPokemonData &&(
                <div>
                    <PokemonSprites pokemon={selectedPokemonData}/>
                    <PokemonStats pokemon={selectedPokemonData}/>
                </div>
                )}
            </div>
            
    )
    
}
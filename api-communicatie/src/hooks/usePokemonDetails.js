import { useState, useEffect } from "react"

export default function usePokemonDetails(selectedPokemon){
    const [selectedPokemonData, setSelectedPokemonData]= useState(null)
    const [loading, setLoading]=useState(false)


    useEffect(()=>{
        if(selectedPokemon){
            setLoading(true)
            fetch(selectedPokemon.url)
                .then(res => res.json())
                .then(data => 
                    {
                        setLoading(false)
                        setSelectedPokemonData(data)})
        }
        
    },[selectedPokemon])

    return [loading, selectedPokemonData]
}
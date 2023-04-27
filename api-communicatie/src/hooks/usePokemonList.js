import { useState, useEffect } from "react";

export default function usePokemonList(){
    const [pokeList, setPokeList]= useState([])
    
    const [loading,setLoadling]=useState(false)
    
    

    useEffect(() => {
        
        const loadPokemon = () => {
            setLoadling(true)
            fetch('https://pokeapi.co/api/v2/pokemon')
            .then(res => res.json())
            .then(data => {
                setLoadling(false)
                setPokeList(data.results)})
        }

        loadPokemon()
        
    }, [])

    return [pokeList, loading]

}
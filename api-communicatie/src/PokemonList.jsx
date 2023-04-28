import { useState, useEffect } from "react";
import PokemonListDisplay from "./PokemonListDisplay";
import PokemonDetails from "./pokemonDetails";
import usePokemonList from "./hooks/usePokemonList";

export default function PokemonList() {
	const [pokeList, loading] = usePokemonList();
	const [selectedPokemon, setSelectedPokemon] = useState(null);
	const columnStyle = {
		display: "grid",
		gridTemplateColumns: "1fr 1fr",
		gap: "10px",
	};

	if (loading) {
		return <p>Loading...</p>;
	}
	return (
		<div>
			<h1>Pokemon list</h1>

			<div style={columnStyle}>
				<PokemonListDisplay pokeList={pokeList} onSelect={setSelectedPokemon} />
				{selectedPokemon && <PokemonDetails selectedPokemon={selectedPokemon} />}
			</div>
		</div>
	);
}

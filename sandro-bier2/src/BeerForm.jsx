export default function BeerForm({
	beerName,
	changeBeerName,
	beerBrewery,
	changeBeerBrewery,
	beerPercentage,
	changeBeerPercentage,
	addBeer,
}) {
	return (
		<div>
			<p>
				Naam: <input type="text" value={beerName} onChange={changeBeerName} />
			</p>
			<p>
				Brouwerij: <input type="text" value={beerBrewery} onChange={changeBeerBrewery} />
			</p>
			<p>
				Alcohol percentage: <input type="number" value={beerPercentage} onChange={changeBeerPercentage} />
			</p>
			<button onClick={addBeer}>Add</button>
		</div>
	);
}

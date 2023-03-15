import Header from "./Header";
import BeerList from "./BeerList";
import Footer from "./Footer";
import ToggleAlcoholPercentage from "./ToggleAlcoholPercentage";
import BeerForm from "./BeerForm";
import { useState } from "react";

function App() {
	const [beers, setBeers] = useState([
		{ name: "Duvel", brewery: "Moortgat", percentage: 7 },
		{ name: "Vedett", brewery: "Moortgat", percentage: 5 },
		{ name: "Jupiler", brewery: "AB Inbev", percentage: 5 },
	]);
	function toggleShowPercent() {
		setShowPercent(!showPercent);
	}
	const [showPercent, setShowPercent] = useState(false);
	const [beerName, setBeerName] = useState("");
	const [beerBrewery, setBeerBrewery] = useState("");
	const [beerPercentage, setBeerPercentage] = useState("");

	function changeBeerName(e) {
		setBeerName(e.target.value);
	}
	function changeBeerBrewery(e) {
		setBeerBrewery(e.target.value);
	}
	function changeBeerPercentage(e) {
		setBeerPercentage(e.target.value);
	}
	function addBeer() {
		if (beerName.length > 0 && beerBrewery.length > 0 && beerPercentage >= 0 && beerPercentage.length > 0) {
			setBeers([...beers, { name: beerName, brewery: beerBrewery, percentage: beerPercentage }]);
		}
	}
	function deleteBeer(indexToDelete) {
		setBeers(beers.filter((item, index) => index != indexToDelete));
	}
	function lowerAlcoholPercentage(indexToChange) {
		setBeers(
			beers.map((beer, index) => {
				if (index == indexToChange && beer.percentage > 0) {
					beer.percentage--;
					return beer;
				} else return beer;
			})
		);
	}
	function upAlcoholPercentage(indexToChange) {
		setBeers(
			beers.map((beer, index) => {
				if (index == indexToChange) {
					beer.percentage++;
					return beer;
				} else return beer;
			})
		);
	}
	function deleteAllBeers() {
		setBeers([]);
	}
	return (
		<div className="App">
			<Header />
			<hr />
			<BeerForm
				beerName={beerName}
				changeBeerName={changeBeerName}
				beerBrewery={beerBrewery}
				changeBeerBrewery={changeBeerBrewery}
				beerPercentage={beerPercentage}
				changeBeerPercentage={changeBeerPercentage}
				addBeer={addBeer}
			/>
			<hr />
			<ToggleAlcoholPercentage showPercent={showPercent} toggleShowPercent={toggleShowPercent} />
			<hr />
			<BeerList
				beers={beers}
				showPercent={showPercent}
				deleteBeer={deleteBeer}
				lowerAlcoholPercentage={lowerAlcoholPercentage}
				upAlcoholPercentage={upAlcoholPercentage}
			/>
			<hr />
			<Footer deleteAllBeers={deleteAllBeers} />
		</div>
	);
}

export default App;

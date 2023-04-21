import Beer from "./Beer";
export default function BeerList({ beers, showPercent, deleteBeer, lowerAlcoholPercentage, upAlcoholPercentage }) {
	return (
		<div>
			{beers.map((beer, index) => (
				<Beer
					beer={beer}
					key={index}
					index={index}
					showPercent={showPercent}
					deleteBeer={deleteBeer}
					lowerAlcoholPercentage={lowerAlcoholPercentage}
					upAlcoholPercentage={upAlcoholPercentage}
				/>
			))}
		</div>
	);
}

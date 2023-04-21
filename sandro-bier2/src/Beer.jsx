export default function Beer({ beer, showPercent, deleteBeer, index, lowerAlcoholPercentage, upAlcoholPercentage }) {
	return (
		<div>
			<h2>{beer.name}</h2>
			<p>Brouwerij: {beer.brewery}</p>
			{showPercent && (
				<div>
					<button onClick={() => lowerAlcoholPercentage(index)}>-</button>
					<p>Alcoholpercentage: {beer.percentage}</p>
					<button onClick={() => upAlcoholPercentage(index)}>+</button>
				</div>
			)}
			<br />
			<button onClick={() => deleteBeer(index)}>Delete</button>
			<hr />
		</div>
	);
}

export default function Footer({ deleteAllBeers }) {
	const date = new Date();
	return (
		<div>
			<p>Copyright {date.getFullYear()}</p>
			<button onClick={deleteAllBeers}>Delete ALL Beers</button>
		</div>
	);
}

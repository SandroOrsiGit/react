export default function Snack({ snack }) {
	const snackStyle = {
		margin: "10px 200px",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		border: "1px solid gray",
		paddingLeft: "10px",
		paddingRight: "10px",
		textAlign: "left",
	};
	const priceStyle = {
		color: "green",
	};
	return (
		<div style={snackStyle}>
			<div>
				<p>{snack.name}</p>
				<p style={priceStyle}>€{snack.price}</p>
			</div>
			<button>+</button>
		</div>
	);
}

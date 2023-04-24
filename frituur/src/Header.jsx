export default function Header() {
	const headerStyle = {
		display: "flex",
		justifyContent: "space-around",
		alignItems: "center",
		position: "sticky",
		top: "0px",
		backgroundColor: "gray",
	};
	const inlineStyle = {
		display: "inline",
	};

	return (
		<div style={headerStyle}>
			<h1>Frituur</h1>
			<a href="#">Ons Menu</a>
			<a href="#">Over onze frituur</a>
			<button>Winkelwagen (?)</button>
		</div>
	);
}

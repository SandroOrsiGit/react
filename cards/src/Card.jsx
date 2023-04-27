export default function Card({ children }) {
	const cardStyle = {
		display: "inline-block",
		boxShadow: "0 0 10px gray",
		border: "1px solid gray",
		borderRadius: "5px",
		padding: "20px 30px",
		margin: "20px",
	};

	return (
		<div style={cardStyle}>
			<p>{children}</p>
		</div>
	);
}

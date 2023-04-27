export default function LinkCard({ url, children }) {
	const linkCardStyle = {
		display: "inline-block",
		boxShadow: "0 0 10px gray",
		border: "1px solid gray",
		borderRadius: "5px",
		margin: "20px",
	};

	const linkStyle = {
		display: "block",
		height: "20px",
		textAlign: "right",
		width: "100%",
		backgroundColor: "lightgray",
		textDecoration: "none",
		color: "black",
	};

	const titleStyle = {
		padding: "20px 20px 0 20px",
	};

	return (
		<div style={linkCardStyle}>
			<p style={titleStyle}>{children}</p>
			<a href={url} style={linkStyle}>
				Visit &raquo;
			</a>
		</div>
	);
}

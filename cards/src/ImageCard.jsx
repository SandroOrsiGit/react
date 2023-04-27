export default function ImageCard({ title, image, alt, children }) {
	const imageCardStyle = {
		display: "inline-block",
		boxShadow: "0 0 10px gray",
		border: "1px solid gray",
		borderRadius: "5px",
		textAlign: "center",
		padding: "0 0 20px 0",
		margin: "20px",
	};

	const imageStyle = {
		width: "200px",
		height: "100px",
		backgroundImage: `url(${image})`,
	};

	return (
		<div style={imageCardStyle}>
			<div style={imageStyle}></div>
			<h1>{title}</h1>
			<p>{children}</p>
		</div>
	);
}

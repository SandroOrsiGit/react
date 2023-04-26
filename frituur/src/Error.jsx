export default function Error() {
	const imgStyle = {
		maxWidth: "100%",
		height: "75vh",
	};
	const errorStyle = {
		margin: "25px",
	};
	return (
		<div style={errorStyle}>
			<h1>500 Internal Server Error</h1>
			<p>
				Sorry, something went wrong.
				<br />A team of highly trained monkeys has been dispatched to deal with
				this situation.
			</p>
			<img src="/chimp-on-a-laptop.png" alt="monke" style={imgStyle} />
		</div>
	);
}

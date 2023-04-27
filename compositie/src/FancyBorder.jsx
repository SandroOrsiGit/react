export default function ({ color, children }) {
	const fancyBorderStyles = {
		borderWidth: "3px",
		borderStyle: "solid",
		borderColor: color,
	};

	return <div style={fancyBorderStyles}>{children}</div>;
}

import FancyBorder from "./FancyBorder";

export default function ({ color = "red", title, subtitle, children }) {
	return (
		<FancyBorder color={color}>
			<h1>{title}</h1>
			<p>{subtitle}</p>
			{children}
		</FancyBorder>
	);
}

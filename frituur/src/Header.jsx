import { NavLink } from "react-router-dom";
import Cart from "./Cart";

export default function Header() {
	const headerStyle = {
		display: "flex",
		justifyContent: "space-around",
		alignItems: "center",
		position: "sticky",
		top: "0px",
		backgroundColor: "gray",
	};

	return (
		<div style={headerStyle}>
			<h1>Frituur</h1>
			<NavLink to={"/"}>Ons Menu</NavLink>
			<NavLink to={"/about"}>Over onze frituur</NavLink>
			<Cart />
		</div>
	);
}

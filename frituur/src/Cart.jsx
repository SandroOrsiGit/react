import { useState } from "react";
import { useSelector } from "react-redux";
import Orders from "./Orders";

export default function Cart() {
	const modalStyle = {
		position: "absolute",
		right: "0",
		top: "0",
		height: "100vh",
		width: "25%",
		backgroundColor: "white",
		border: "1px solid black",
		padding: "25px",
		zIndex: "10",
	};
	const darkBackgroundStyle = {
		zIndex: 9,
		backgroundColor: "rgb(0,0,0,0.75)",
		position: "absolute",
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		height: "100vh",
	};

	const [show, setShow] = useState(false);
	const cart = useSelector((state) => state.cart);

	function openCart() {
		setShow(true);
	}

	return (
		<div>
			<button onClick={openCart}>Winkelwagen ({cart.length})</button>
			{show == true && (
				<div>
					<div style={modalStyle}>
						<h1>Jouw bestelling</h1>
						<Orders />
					</div>
					<div style={darkBackgroundStyle} onClick={() => setShow(false)}></div>
				</div>
			)}
		</div>
	);
}

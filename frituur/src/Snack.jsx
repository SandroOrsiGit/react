import { useState } from "react";
import { addToCart } from "./redux/actions";
import { useDispatch } from "react-redux";

export default function Snack({ snack }) {
	const snackStyle = {
		margin: "10px 200px",
		display: "grid",
		gridTemplateColumns: "6fr 6fr",
		justifyItems: "space-between",
		alignItems: "center",
		border: "1px solid gray",
		paddingLeft: "10px",
		paddingRight: "10px",
		textAlign: "left",
	};
	const priceStyle = {
		color: "green",
	};
	const buttonStyle = {
		width: "25px",
		justifySelf: "right",
	};

	const [opened, setOpened] = useState(false);
	const [counter, setCounter] = useState(0);
	const dispatch = useDispatch();

	function handleOpenClick() {
		setOpened(!opened);
	}
	function handleCounterClick(value) {
		if (counter == 0 && value == -1) {
			return;
		}
		setCounter(counter + value);
	}
	function handleAddToCart() {
		if (counter > 0) {
			dispatch(addToCart(snack.name, counter, snack.price));
			setCounter(0);
			setOpened(false);
		}
	}
	return (
		<div style={snackStyle}>
			<div>
				<p>{snack.name}</p>
				<p style={priceStyle}>€{snack.price}</p>
			</div>
			<button onClick={handleOpenClick} style={buttonStyle}>
				{opened ? "-" : "+"}
			</button>
			{opened ? (
				<div>
					<button class="bigButtonStyle" onClick={() => handleCounterClick(-1)}>
						-
					</button>
					{counter}
					<button class="bigButtonStyle" onClick={() => handleCounterClick(1)}>
						+
					</button>
					{"	"}
					<button class="bigButtonStyle" onClick={handleAddToCart}>
						Toevoegen
					</button>
				</div>
			) : (
				""
			)}
		</div>
	);
}

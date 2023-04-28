import { add_weight } from "./redux/actions";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function WeightInput() {
	const [input, setInput] = useState("");
	const dispatch = useDispatch();

	function handleSave() {
		if (input.length && !isNaN(parseInt(input))) {
			dispatch(add_weight(input));
			setInput("");
		}
	}

	return (
		<p>
			Add Weight in kg:
			<input
				type="text"
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
			<button onClick={handleSave} disabled={!input.length}>
				Add
			</button>
		</p>
	);
}

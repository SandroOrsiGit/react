import { set_length } from "./redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function LengthInput() {
	const [input, setInput] = useState("");
	const dispatch = useDispatch();

	function handleSave() {
		if (input.length && !isNaN(parseInt(input))) {
			dispatch(set_length(input));
			setInput("");
		}
	}

	return (
		<p>
			Length in cm:
			<input
				type="text"
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
			<button onClick={handleSave} disabled={!input.length}>
				Save
			</button>
		</p>
	);
}

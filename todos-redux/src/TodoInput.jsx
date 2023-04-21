import { useState } from "react";

export default function TodoInput({ buttonText, onClick, defaultValue = "" }) {
	const [input, setInput] = useState(defaultValue);

	function handleClick() {
		onClick(input);
		setInput("");
	}

	return (
		<div>
			<input
				type="text"
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
			<button onClick={handleClick} disabled={!input.length}>
				{buttonText}
			</button>
		</div>
	);
}

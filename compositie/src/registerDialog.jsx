import { useState } from "react";
import Dialog from "./Dialog";
export default function RegisterDialog() {
	const [input, setInput] = useState("");
	return (
		<Dialog title="Register" subtitle="Registering is easy and fast" color="green">
			<div>
				Naam:
				<input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
				{input.length > 0 && <button>Registreer als {input} &raquo;</button>}
			</div>
		</Dialog>
	);
}

import { useState } from "react";
import AddCustomCreature from "./AddCustomCreature";

export default function AddModal() {
	const [openModal, setOpenModal] = useState(false);
	return (
		<div>
			<button onClick={() => setOpenModal(true)}>Add Custom Monster/Player</button>
			{openModal && (
				<div>
					<div className="add-modal">
						<AddCustomCreature setOpenModal={setOpenModal} />
					</div>
					<div className="dark-bg-overlay" onClick={() => setOpenModal(false)}></div>
				</div>
			)}
		</div>
	);
}

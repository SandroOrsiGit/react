import AddModal from "./AddModal.jsx";
import DropdownMonster from "./DropdownMonster.jsx";
import monsters from "./monsters.js";
import { useState } from "react";

export default function AddCreature() {
	const [dropdownActive, setDropdownActive] = useState(false);

	return (
		<div>
			<div className="add-creature">
				<div className="dropdown" onClick={() => setDropdownActive(!dropdownActive)}>
					<p>--Select Creature To Add--</p>
					{dropdownActive ? <p>&#x25B2;</p> : <p>&#x25BC;</p>}
				</div>
				<AddModal />
			</div>
			<div className="dropdown-content">
				{dropdownActive &&
					monsters.map((monster, index) => (
						<DropdownMonster monster={monster} key={index} setDropdownActive={setDropdownActive} />
					))}
			</div>
		</div>
	);
}

import { useState } from "react";
import DropdownMonster from "./DropdownMonster";

export default function SavedCreatures() {
	localStorage.removeItem("debug");
	const [dropdownActive, setDropdownActive] = useState(false);
	const creaturesInLocalStorage = { ...localStorage };
	const keys = Object.keys(creaturesInLocalStorage);
	let creatures = [];
	for (let i = 0; i < keys.length; i++) {
		creatures.push(JSON.parse(localStorage.getItem(keys[i])));
	}
	return (
		<div>
			<h3>Saved Creatures</h3>
			<div>
				<div className="add-creature">
					<div className="dropdown" onClick={() => setDropdownActive(!dropdownActive)}>
						<p>--Select Creature To Add--</p>
						{dropdownActive ? <p>&#x25B2;</p> : <p>&#x25BC;</p>}
					</div>
				</div>
				<div className="dropdown-content">
					{dropdownActive &&
						creatures.map((creature, index) => (
							<DropdownMonster
								monster={creature}
								key={index}
								setDropdownActive={setDropdownActive}
								saved={true}
							/>
						))}
				</div>
			</div>
		</div>
	);
}

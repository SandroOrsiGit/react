import CreatureRow from "./CreatureRow";
import { useSelector } from "react-redux";
import { useState } from "react";
import RollInitiativeAllButton from "./RollInitiativeAllButton";

export default function CreatureList() {
	const creatures = useSelector((state) => state.creatures);
	const [initiativeArray, setInitiativeArray] = useState([0, 0, 0, 0, 0, 0]);
	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>Image</th>
						<th>Name</th>
						<th>HP</th>
						<th>Initiative</th>
					</tr>
				</thead>
				<tbody>
					{creatures.map((creature, index) => (
						<CreatureRow
							creature={creature}
							key={index}
							index={index}
							setInitiativeArray={setInitiativeArray}
							initiativeArray={initiativeArray}
						/>
					))}
				</tbody>
			</table>
			<RollInitiativeAllButton />
		</div>
	);
}

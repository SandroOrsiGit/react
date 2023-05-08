import CreatureRow from "./CreatureRow";
import { useSelector } from "react-redux";

export default function CreatureList() {
	const creatures = useSelector((state) => state.creatures);
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
						<CreatureRow creature={creature} key={index} />
					))}
				</tbody>
			</table>
		</div>
	);
}

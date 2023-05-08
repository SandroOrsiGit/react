import { useState } from "react";

export default function CreatureRow({ creature }) {
	const [hp, setHP] = useState(creature.hp);
	const [initiative, setInitiative] = useState(0);
	const [hpActive, setHPActive] = useState(false);
	const [initiativeActive, setInitiativeActive] = useState(false);
	return (
		<tr className="creature">
			<td>
				<img src={creature.img_url} alt={creature.name} />
			</td>
			<td>
				<p>{creature.name}</p>
			</td>
			<td>
				{hpActive ? (
					<>
						<input
							type="text"
							value={hp}
							onChange={(e) => setHP(e.target.value)}
						/>
						<button onClick={() => setHPActive(false)}>Set</button>
					</>
				) : (
					<p>
						{hp} <button onClick={() => setHPActive(true)}>Edit</button>
					</p>
				)}
			</td>
			<td>
				{initiativeActive ? (
					<>
						<input
							type="number"
							value={initiative}
							onChange={(e) => setInitiative(e.target.value)}
						/>
						<button onClick={() => setInitiativeActive(false)}>Set</button>
					</>
				) : (
					<p>
						{initiative}{" "}
						<button onClick={() => setInitiativeActive(true)}>Edit</button>
					</p>
				)}
			</td>
		</tr>
	);
}

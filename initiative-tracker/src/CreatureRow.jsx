import { useState } from "react";
import { useDispatch } from "react-redux";
import {
	editCreatureHp,
	editCreatureInitiative,
	removeCreature,
	sortCreatures,
} from "./redux/actions";
import { useSelector } from "react-redux";

export default function CreatureRow({ creature, index }) {
	const hp = useSelector((state) => state.creatures[index].hp);
	const initiative = useSelector((state) => state.creatures[index].initiative);
	let roll = false;
	const [localHp, setLocalHp] = useState(hp);
	const [localInitiative, setLocalInitiative] = useState(initiative);
	const [hpActive, setHPActive] = useState(false);
	const [initiativeActive, setInitiativeActive] = useState(false);
	const dispatch = useDispatch();
	const active = useSelector((state) => state.creatures[index].active);

	function handleSetHP() {
		dispatch(editCreatureHp(index, localHp));
		setHPActive(false);
	}
	function handleSetInitiative() {
		dispatch(editCreatureInitiative(index, localInitiative));
		setInitiativeActive(false);
	}

	function handleKeyPressEnterInitiative(e) {
		if (e.key === "Enter") {
			setLocalInitiative(e.target.value);
			handleSetInitiative();
		}
	}
	function handleKeyPressHp(e) {
		if (e.key === "Enter") {
			setLocalHp(e.target.value);
			handleSetHP();
		}
	}
	function handleRemove() {
		dispatch(removeCreature(index));
	}

	function handleRoll() {
		let requestdata = {
			jsonrpc: "2.0",
			method: "generateIntegers",
			params: {
				apiKey: "58b137e9-7fa9-4445-9daa-a1d05edb51a1",
				n: 1,
				min: 1,
				max: 20,
			},
			id: 1,
		};
		fetch("https://api.random.org/json-rpc/4/invoke", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(requestdata),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setLocalInitiative(data.result.random.data[0]);
				dispatch(editCreatureInitiative(index, data.result.random.data[0]));
			});
	}
	return (
		<tr
			className="creature"
			style={{ backgroundColor: active ? "lightgrey" : "white" }}
		>
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
							type="number"
							min="0"
							value={localHp}
							onChange={(e) => setLocalHp(e.target.value)}
							onKeyDown={(e) => handleKeyPressHp(e)}
						/>
						<button onClick={handleSetHP}>Set</button>
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
							value={localInitiative}
							onChange={(e) => setLocalInitiative(e.target.value)}
							onKeyDown={(e) => handleKeyPressEnterInitiative(e)}
						/>
						<button onClick={handleSetInitiative}>Set</button>
					</>
				) : (
					<p>
						{initiative}{" "}
						<button onClick={() => setInitiativeActive(true)}>Edit</button>
						<button onClick={handleRoll}>Roll</button>
					</p>
				)}
			</td>
			<td>
				<button onClick={handleRemove}>Remove</button>
			</td>
		</tr>
	);
}

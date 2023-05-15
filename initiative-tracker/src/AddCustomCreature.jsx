import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToTracker } from "./redux/actions";
import SavedCreatures from "./SavedCreatures";

export default function AddCustomCreature() {
	const [picture, setPicture] = useState("");
	const [name, setName] = useState("");
	const [hp, setHp] = useState("");
	const [count, setCount] = useState("1");
	const [save, setSave] = useState(false);
	const dispatch = useDispatch();
	const saved = true;

	function handleAdd() {
		if (picture && name && hp) {
			let creature = { img_url: picture + ".png", name: name, hp: hp };
			dispatch(addToTracker(creature, count));
			if (save) {
				localStorage.setItem(name, JSON.stringify(creature));
			}
		}
	}
	return (
		<div className="add-custom-creature">
			<div>
				<h3>New Creature</h3>
				<p>Picture (player/monster):</p>
				<div className="picture-input">
					<input type="radio" value="player" name="picture" onChange={() => setPicture("player")} />
					<img src="player.png" alt="" />
					<input type="radio" value="monster" name="picture" onChange={() => setPicture("monster")} />
					<img src="monster.png" alt="" />
				</div>
				<p>
					Name: <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
				</p>
				<p>
					HP: <input type="number" min="1" name="hp" value={hp} onChange={(e) => setHp(e.target.value)} />
				</p>
				<p>
					Amount:
					<input
						type="number"
						name="count"
						value={count}
						min="1"
						onChange={(e) => setCount(e.target.value)}
					/>
				</p>
				<p>
					<input type="checkbox" name="save" onChange={(e) => setSave(e.target.checked)} checked={save} />
					Save this Creature
				</p>
				<button onClick={handleAdd}>Add</button>
				<SavedCreatures saved={true} />
			</div>
		</div>
	);
}

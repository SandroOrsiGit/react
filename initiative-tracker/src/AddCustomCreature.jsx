import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToTracker } from "./redux/actions";

export default function AddCustomCreature() {
	const [picture, setPicture] = useState("");
	const [name, setName] = useState("");
	const [hp, setHp] = useState("");
	const [count, setCount] = useState("1");
	const dispatch = useDispatch();

	function handleAdd() {
		if (picture && name && hp) {
			dispatch(addToTracker({ img_url: picture + ".png", name: name, hp: hp }, count));
		}
	}
	return (
		<div className="add-custom-creature">
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
				HP: <input type="number" name="hp" value={hp} onChange={(e) => setHp(e.target.value)} />
			</p>

			<p>
				Amount:
				<input type="number" name="count" value={count} min="1" onChange={(e) => setCount(e.target.value)} />
			</p>
			<button onClick={handleAdd}>Add</button>
		</div>
	);
}

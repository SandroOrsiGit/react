import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToTracker } from "./redux/actions";

export default function DropdownMonster({ monster, setDropdownActive }) {
	const [selected, setSelected] = useState(false);
	const [count, setCount] = useState(1);
	const dispatch = useDispatch();
	function handleAdd() {
		if (count > 0) {
			setDropdownActive(false);
			setSelected(false);
			dispatch(addToTracker(monster, count));
		}
	}
	return (
		<div>
			<div className="dropdown-monster" onClick={() => setSelected(!selected)}>
				<img src={monster.img_url} alt={monster.name} />
				<p>{monster.name}</p>
			</div>
			{selected && (
				<div>
					<input
						type="number"
						min="1"
						value={count}
						onChange={(e) => setCount(e.target.value)}
					/>
					<button onClick={handleAdd}>Add</button>
				</div>
			)}
		</div>
	);
}

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToTracker } from "./redux/actions";

export default function DropdownMonster({ monster, setDropdownActive, saved }) {
	const [selected, setSelected] = useState(false);
	const [count, setCount] = useState(1);
	const dispatch = useDispatch();
	const [removed, setRemoved] = useState(false);
	function handleAdd() {
		if (count > 0) {
			setDropdownActive(false);
			setSelected(false);
			dispatch(addToTracker(monster, count));
		}
	}
	function handleRemove(e) {
		e.stopPropagation();
		localStorage.removeItem(monster.name);
		setRemoved(true);
	}
	return (
		<div>
			{!removed && (
				<div
					className="dropdown-monster"
					onClick={() => setSelected(!selected)}
				>
					<img src={monster.img_url} alt={monster.name} />
					<p>{monster.name}</p>
					{saved && (
						<button onClick={handleRemove} className="small-button">
							Remove
						</button>
					)}
				</div>
			)}
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

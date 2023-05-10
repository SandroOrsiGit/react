import { useDispatch } from "react-redux";
import { toggleCreatureActive, sortCreatures, editCreatureHp } from "./redux/actions";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function ControlPanel() {
	const dispatch = useDispatch();
	const [started, setStarted] = useState(false);
	const [activeHp, setActiveHp] = useState(0);

	const creatures = useSelector((state) => state.creatures);
	const [length, setLength] = useState(0);
	const [counter, setCounter] = useState(0);

	let hpArray = [];

	for (let i = 0; i < creatures.length; i++) {
		hpArray.push(creatures[i].hp);
	}

	function increaseCounter() {
		if (counter < length - 1) {
			setCounter(counter + 1);
		} else {
			setCounter(0);
		}
	}

	function handleStart() {
		if (started == false) {
			dispatch(sortCreatures());
			dispatch(toggleCreatureActive(counter));
			setStarted(true);
			setLength(creatures.length);
		} else {
			dispatch(toggleCreatureActive(counter));
			if (counter == length - 1) {
				dispatch(toggleCreatureActive(0));
			} else {
				dispatch(toggleCreatureActive(counter + 1));
			}
			increaseCounter();
		}
	}
	function handleEnd() {
		if (started) {
			dispatch(toggleCreatureActive(counter));
			setStarted(false);
			setCounter(0);
		}
	}
	function handleChangeHp(value) {
		if (started) {
			let hp = hpArray[counter];
			dispatch(editCreatureHp(counter, parseInt(hp) + value));
			hpArray[counter] = parseInt(hp) + 1;
		}
	}

	return (
		<div className="control">
			<div>
				<button className="button heal" onClick={() => handleChangeHp(1)}>
					Heal
				</button>
			</div>
			<div className="flex">
				<button className="button" onClick={handleStart}>
					{started ? "Next Turn" : "Start Combat"}
				</button>
				<button className="button" onClick={handleEnd}>
					End Combat
				</button>
			</div>
			<div>
				<button className="button damage" onClick={() => handleChangeHp(-1)}>
					Damage
				</button>
			</div>
		</div>
	);
}

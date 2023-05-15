import { useDispatch } from "react-redux";
import { toggleCreatureActive, sortCreatures, editCreatureHp, start, end } from "./redux/actions";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function ControlPanel() {
	const dispatch = useDispatch();
	const state = useSelector((state) => state);
	const creatures = state.creatures;
	const creaturesRemoved = state.creaturesRemoved;
	const indexOfLastRemoved = state.indexOfLastRemoved;
	const started = state.started;
	const creatureAddedInCombat = state.creatureAddedInCombat;
	const [length, setLength] = useState(0);
	const [counter, setCounter] = useState(0);
	const [turnCounter, setTurnCounter] = useState(0);
	const [creatureRemovedOnCurrentIndex, setCreatureRemovedOnCurrentIndex] = useState(false);
	const [currentCreature, setCurrentCreature] = useState(null);
	const [recentlySorted, setRecentlySorted] = useState(false);

	let hpArray = [];

	for (let i = 0; i < creatures.length; i++) {
		hpArray.push(creatures[i].hp);
	}

	useEffect(() => {
		if (started) {
			setLength(length - 1);
			if (indexOfLastRemoved < counter) {
				setCounter(counter - 1);
			} else if (indexOfLastRemoved == counter) {
				setCreatureRemovedOnCurrentIndex(true);
				setCounter(counter - 1);
			}
		}
	}, [creaturesRemoved]);
	useEffect(() => {
		setCounter(creatures.indexOf(currentCreature));
		setRecentlySorted(false);
	}, [recentlySorted]);

	useEffect(() => {
		if (started && creatureAddedInCombat) {
			setLength(creatures.length);
		}
	}, [creatureAddedInCombat]);

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
			setLength(creatures.length);
			dispatch(start());
		} else {
			if (!creatureRemovedOnCurrentIndex) {
				dispatch(toggleCreatureActive(counter));
			} else {
				setCreatureRemovedOnCurrentIndex(false);
			}
			if (counter == length - 1) {
				dispatch(toggleCreatureActive(0));
				setTurnCounter(turnCounter + 1);
			} else {
				dispatch(toggleCreatureActive(counter + 1));
			}
			increaseCounter();
		}
	}
	function handleEnd() {
		if (started) {
			dispatch(toggleCreatureActive(counter));
			setCounter(0);
			dispatch(end());
			setTurnCounter(0);
		}
	}
	function handleChangeHp(value) {
		if (started) {
			let hp = hpArray[counter];
			dispatch(editCreatureHp(counter, parseInt(hp) + value));
			hpArray[counter] = parseInt(hp) + 1;
		}
	}
	function sort() {
		setCurrentCreature(creatures[counter]);
		dispatch(sortCreatures());
		setRecentlySorted(true);
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
				<button className="button" onClick={sort}>
					Sort
				</button>
			</div>
			<div>
				<button className="button damage" onClick={() => handleChangeHp(-1)}>
					Damage
				</button>
			</div>
			<div>
				<p className="bloodred">Turns passed: {turnCounter}</p>
			</div>
		</div>
	);
}

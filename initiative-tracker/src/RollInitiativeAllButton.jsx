import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { rollInitiativeAll, sortCreatures } from "./redux/actions";

export default function RollInitiativeAllButton() {
	const dispatch = useDispatch();
	const creatures = useSelector((state) => state.creatures);
	const length = creatures.length;

	function handleRoll() {
		let requestdata = {
			jsonrpc: "2.0",
			method: "generateIntegers",
			params: {
				apiKey: "58b137e9-7fa9-4445-9daa-a1d05edb51a1",
				n: length,
				min: 1,
				max: 20,
			},
			id: 2,
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
				dispatch(rollInitiativeAll(data.result.random.data));
			});
	}
	return (
		<button className="button" onClick={handleRoll}>
			Roll Initiative!
		</button>
	);
}

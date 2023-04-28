import { useDispatch } from "react-redux";
import { remove_weight } from "./redux/actions";

export default function Weight({ weight, length, index }) {
	const dispatch = useDispatch();

	function handleRemove() {
		dispatch(remove_weight(index));
	}
	return (
		<li>
			{weight} (bmi: {(weight / Math.pow(length / 100, 2)).toFixed(2)}){" "}
			<button onClick={handleRemove}>Remove</button>
		</li>
	);
}

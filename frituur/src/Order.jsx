import { removeFromCart } from "./redux/actions";
import { useDispatch } from "react-redux";

export default function Order({ name, amount, price, index }) {
	const dispatch = useDispatch();
	function handleRemove() {
		dispatch(removeFromCart(index));
	}
	return (
		<tr>
			<td>{name}</td>
			<td>
				{amount} x €{price}
			</td>
			<td>€{price * amount}</td>
			<td>
				<button onClick={handleRemove}>X</button>
			</td>
		</tr>
	);
}

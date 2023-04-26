export default function Order({ name, amount, price }) {
	return (
		<tr>
			<td>{name}</td>
			<td>
				{amount} x €{price}
			</td>
			<td>€{price * amount}</td>
			<td>
				<button>X</button>
			</td>
		</tr>
	);
}

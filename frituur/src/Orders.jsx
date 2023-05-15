import { useSelector } from "react-redux";
import Order from "./Order";

export default function Orders({ setShow }) {
	const tableStyles = {
		width: "90%",
		textAlign: "left",
	};

	const cart = useSelector((state) => state.cart);
	let totaal = 0;
	cart.forEach((snack) => {
		totaal += snack.price * snack.count;
	});
	return (
		<div>
			{cart.length ? (
				<table style={tableStyles}>
					<th>Naam</th>
					<th>Aantal</th>
					<th>Totaal</th>
					<th></th>
					{cart.map((order, index) => (
						<Order name={order.snack} key={index} amount={order.count} price={order.price} index={index} />
					))}
					<hr />
					<tr>
						<td>
							<h2>Totaal</h2>
						</td>
						<td></td>
						<td>
							<h2>€{totaal}</h2>
						</td>
						<td></td>
					</tr>
				</table>
			) : (
				<div>
					<br />
					<p>U heeft nog geen producten toegevoegd</p>
				</div>
			)}
		</div>
	);
}

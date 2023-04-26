import { useSelector } from "react-redux";
import Order from "./Order";

export default function Orders() {
	const tableStyles = {
		width: "90%",
		textAlign: "left",
	};

	const cart = useSelector((state) => state.cart);
	return (
		<div>
			<table style={tableStyles}>
				<th>Naam</th>
				<th>Aantal</th>
				<th>Totaal</th>
				<th></th>
				{cart.length ? (
					<>
						{cart.map((order, index) => (
							<Order
								name={order.snack}
								key={index}
								amount={order.count}
								price={order.price}
							/>
						))}
					</>
				) : (
					<p>U heeft nog geen producten toegevoegd</p>
				)}
			</table>
		</div>
	);
}

import { useSelector } from "react-redux";

export default function PayForm() {
	const cart = useSelector((state) => state.cart);

	return (
		<div>
			{cart.length != 0 && (
				<>
					<form>
						<p>
							<label htmlFor="name">
								Naam: <input type="name" />
							</label>
						</p>
						<p>
							<label htmlFor="email">
								Email: <input type="email" />
							</label>
						</p>
						<p>
							<label htmlFor="phone">
								Telefoonnummer: <input type="phone" />
							</label>
						</p>
					</form>
					<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
						<button className="bigButtonStyle">Bestellen</button>
					</a>
				</>
			)}
		</div>
	);
}

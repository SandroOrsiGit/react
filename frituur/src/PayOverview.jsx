import Orders from "./Orders";
import PayForm from "./PayForm";

export default function PayOverview() {
	const payStyle = {
		margin: "25px",
	};

	return (
		<div style={payStyle}>
			<h1>Afrekenen</h1>
			<Orders />
			<PayForm />
		</div>
	);
}

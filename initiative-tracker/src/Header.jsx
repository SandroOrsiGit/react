import AddCreature from "./AddCreature";
import Login from "./Login";

export default function Header() {
	return (
		<div className="header">
			<AddCreature />
			<h1>D&D 5E Initiative Tracker</h1>
			<Login />
		</div>
	);
}

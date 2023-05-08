import CreatureList from "./CreatureList";
import HPButtons from "./HPButtons";

export default function Tracker() {
	return (
		<div>
			<div className="tracker">
				<CreatureList />
				<HPButtons />
			</div>
		</div>
	);
}

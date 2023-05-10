import CreatureList from "./CreatureList";
import ControlPanel from "./ControlPanel";

export default function Tracker() {
	return (
		<div>
			<div className="tracker">
				<CreatureList />
				<ControlPanel />
			</div>
		</div>
	);
}

import CreatureList from "./CreatureList";
import ControlPanel from "./ControlPanel";
import { useSelector } from "react-redux";

export default function Tracker() {
	const creatures = useSelector((state) => state.creatures);
	return (
		<div>
			<div className="tracker">
				{creatures.length ? (
					<>
						<CreatureList />
						<ControlPanel />
					</>
				) : (
					<h1>Add some creatures to get started!</h1>
				)}
			</div>
		</div>
	);
}

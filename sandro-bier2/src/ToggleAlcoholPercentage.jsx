export default function ToggleAlcoholPercentage({ showPercent, toggleShowPercent }) {
	return <button onClick={toggleShowPercent}>{showPercent ? "Verberg" : "Toon"} alcohol percentages</button>;
}

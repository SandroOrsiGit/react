import { useSelector } from "react-redux";

export default function LengthDisplay() {
	const length = useSelector((state) => state.length);
	return (
		<div>
			{length ? (
				<p>Length is set to {length}</p>
			) : (
				<p>Length has not been set yet</p>
			)}
		</div>
	);
}

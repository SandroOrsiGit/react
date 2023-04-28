import { useSelector } from "react-redux";
import Weight from "./Weight";

export default function WeightList() {
	const weights = useSelector((state) => state.weights);
	const length = useSelector((state) => state.length);
	if (!length || !weights.length) {
		return <p>Please set both length and weight to see BMI!</p>;
	} else {
		return (
			<ul>
				{weights.map((weight, index) => (
					<Weight key={index} weight={weight} length={length} index={index} />
				))}
			</ul>
		);
	}
}

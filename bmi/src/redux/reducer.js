import Weight from "../Weight";
import { SET_LENGTH, ADD_WEIGHT, REMOVE_WEIGHT } from "./actions";

let initialState = { length: 0, weights: [] };

export default function (state = initialState, action) {
	switch (action.type) {
		case SET_LENGTH:
			return { ...state, length: action.input };

		case ADD_WEIGHT:
			return { ...state, weights: [...state.weights, action.input] };

		case REMOVE_WEIGHT:
			return {
				...state,
				weights: state.weights.filter((weight, index) => {
					return index != action.index;
				}),
			};
		default:
			return state;
	}
}

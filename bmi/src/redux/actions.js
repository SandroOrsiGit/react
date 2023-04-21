export const SET_LENGTH = "SET_LENGTH";
export const ADD_WEIGHT = "ADD_WEIGHT";
export const REMOVE_WEIGHT = "REMOVE_WEIGHT";

export function set_length(input) {
	return { type: SET_LENGTH, input };
}

export function add_weight(input) {
	return { type: ADD_WEIGHT, input };
}

export function remove_weight(index) {
	return { type: REMOVE_WEIGHT, index };
}

export const ADD = "ADD";
export const UPDATE = "UPDATE";
export const REMOVE = "DELETE";
export const TOGGLE = "TOGGLE";

export function add(todo) {
	let parameter = { todo };
	return { type: ADD, parameter };
}

export function update(todo, input) {
	let parameter = { todo, input };
	return { type: UPDATE, parameter };
}

export function remove(todo) {
	let parameter = { todo };
	return { type: REMOVE, parameter };
}

export function toggle(todo) {
	let parameter = { todo };
	return { type: TOGGLE, parameter };
}

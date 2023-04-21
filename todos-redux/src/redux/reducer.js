import { ADD, UPDATE, REMOVE, TOGGLE } from "./actions";

export default function (state = [], action) {
	let indexToUpdate;
	switch (action.type) {
		case ADD:
			indexToUpdate = state.indexOf(action.parameter.todo);
			return [...state, action.parameter.todo];

		case UPDATE:
			indexToUpdate = state.indexOf(action.parameter.todo);
			return state.map((todoItem, index) => {
				if (index === indexToUpdate) {
					return {
						...todoItem,
						text: action.parameter.input,
					};
				}
				return todoItem;
			});

		case REMOVE:
			indexToUpdate = state.indexOf(action.parameter.todo);
			return state.filter((todoItem, index) => {
				return index != indexToUpdate;
			});

		case TOGGLE:
			indexToUpdate = state.indexOf(action.parameter.todo);
			return state.map((todoItem, index) => {
				if (index === indexToUpdate) {
					return { ...todoItem, completed: !todoItem.completed };
				}
				return todoItem;
			});

		default:
			return state;
	}
}

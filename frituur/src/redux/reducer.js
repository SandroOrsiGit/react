import { ADD_TO_CART } from "./actions";

let initialState = {
	cart: [],
};

export default function (state = initialState, action) {
	switch (action.type) {
		case ADD_TO_CART:
			return {
				...state,
				cart: [...state.cart, { snack: action.snack, count: action.count }],
			};
	}
}

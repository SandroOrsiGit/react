export const ADD_TO_CART = "ADD_TO_CART";

export function addToCart(snack, count) {
	return { type: ADD_TO_CART, snack, count };
}

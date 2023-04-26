export const ADD_TO_CART = "ADD_TO_CART";

export function addToCart(snack, count, price) {
	return { type: ADD_TO_CART, snack, count, price };
}

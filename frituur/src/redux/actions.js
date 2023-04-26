export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export function addToCart(snack, count, price) {
	return { type: ADD_TO_CART, snack, count, price };
}
export function removeFromCart(index) {
	return { type: REMOVE_FROM_CART, index };
}

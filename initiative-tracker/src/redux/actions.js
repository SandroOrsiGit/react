export const ADD_TO_TRACKER = "ADD_TO_TRACKER";

export function addToTracker(creature, count) {
	return { type: ADD_TO_TRACKER, creature, count };
}

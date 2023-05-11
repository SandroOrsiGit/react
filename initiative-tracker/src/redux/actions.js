export const ADD_TO_TRACKER = "ADD_TO_TRACKER";
export const EDIT_CREATURE_HP = "EDIT_CREATURE_HP";
export const EDIT_CREATURE_INITIATIVE = "EDIT_CREATURE_INITIATIVE";
export const ROLL_INITIATIVE_ALL = "ROLL_INITIATIVE_ALL";
export const SORT_CREATURES = "SORT_CREATURES";
export const TOGGLE_CREATURE_ACTIVE = "TOGGLE_CREATURE_ACTIVE";
export const REMOVE_CREATURE = "REMOVE_CREATURE";
export const START = "START";
export const END = "END";

export function addToTracker(creature, count) {
	return { type: ADD_TO_TRACKER, creature, count };
}
export function editCreatureHp(indexToEdit, value) {
	return { type: EDIT_CREATURE_HP, indexToEdit, value };
}
export function editCreatureInitiative(indexToEdit, value) {
	return { type: EDIT_CREATURE_INITIATIVE, indexToEdit, value };
}
export function rollInitiativeAll(rolls) {
	return { type: ROLL_INITIATIVE_ALL, rolls };
}
export function sortCreatures() {
	return { type: SORT_CREATURES };
}
export function toggleCreatureActive(indexToEdit) {
	return { type: TOGGLE_CREATURE_ACTIVE, indexToEdit };
}
export function removeCreature(index) {
	return { type: REMOVE_CREATURE, index };
}
export function start() {
	return { type: START };
}
export function end() {
	return { type: END };
}

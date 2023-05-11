import {
	ADD_TO_TRACKER,
	EDIT_CREATURE_HP,
	EDIT_CREATURE_INITIATIVE,
	ROLL_INITIATIVE_ALL,
	TOGGLE_CREATURE_ACTIVE,
	SORT_CREATURES,
	REMOVE_CREATURE,
	START,
	END,
} from "./actions";

let initialState = {
	creatures: [],
	creaturesRemoved: [],
	indexOfLastRemoved: null,
	creatureAddedInCombat: false,
	started: false,
};

export default function (state = initialState, action) {
	let newState;
	switch (action.type) {
		case ADD_TO_TRACKER:
			newState = { ...state };

			for (let i = 0; i < action.count; i++) {
				newState = {
					...newState,
					creatures: [
						...newState.creatures,
						{ ...action.creature, initiative: "", active: false },
					],
					creatureAddedInCombat: newState.started,
				};
			}

			return newState;
		case EDIT_CREATURE_HP:
			return {
				...state,
				creatures: state.creatures.map((creature, index) => {
					if (index === action.indexToEdit) {
						return { ...creature, hp: action.value };
					} else {
						return creature;
					}
				}),
			};
		case EDIT_CREATURE_INITIATIVE:
			return {
				...state,
				creatures: state.creatures.map((creature, index) => {
					if (index === action.indexToEdit) {
						return { ...creature, initiative: action.value };
					} else {
						return creature;
					}
				}),
			};
		case ROLL_INITIATIVE_ALL:
			return {
				...state,
				creatures: state.creatures.map((creature, index) => {
					return { ...creature, initiative: action.rolls[index] };
				}),
			};
		case SORT_CREATURES:
			return {
				...state,
				creatures: state.creatures.slice().sort(function (a, b) {
					if (a.initiative > b.initiative) {
						return -1;
					}
					if (a.initiative < b.initiative) {
						return 1;
					}
					return 0;
				}),
			};
		case TOGGLE_CREATURE_ACTIVE:
			return {
				...state,
				creatures: state.creatures.map((creature, index) => {
					if (index === action.indexToEdit) {
						return { ...creature, active: !creature.active };
					} else {
						return creature;
					}
				}),
			};
		case REMOVE_CREATURE:
			return {
				...state,
				creatures: state.creatures.filter((creature, index) => {
					if (index === action.index) {
						return;
					} else {
						return creature;
					}
				}),
				creaturesRemoved: [
					...state.creaturesRemoved,
					state.creatures[action.index],
				],
				indexOfLastRemoved: action.index,
			};
		case START:
			return {
				...state,
				started: true,
			};
		case END:
			return {
				...state,
				started: false,
			};

		default:
			return state;
	}
}

import {
	ADD_TO_TRACKER,
	EDIT_CREATURE_HP,
	EDIT_CREATURE_INITIATIVE,
	ROLL_INITIATIVE_ALL,
	TOGGLE_CREATURE_ACTIVE,
	SORT_CREATURES,
} from "./actions";

let initialState = {
	creatures: [
		{
			name: "Grignr",
			hp: 35,
			img_url:
				"https://preview.redd.it/the-man-too-dumb-to-die-i-present-grignr-grignrson-v0-znv1qtahf3ya1.png?width=1024&format=png&auto=webp&s=4bd3979279597a44a8fb1aa9f3fb1dd0a5758895",
			initiative: "",
			active: false,
		},
	],
};

export default function (state = initialState, action) {
	let newState;
	switch (action.type) {
		case ADD_TO_TRACKER:
			newState = { ...state };

			for (let i = 0; i < action.count; i++) {
				newState = {
					...newState,
					creatures: [...newState.creatures, { ...action.creature, initiative: "", active: false }],
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

		default:
			return state;
	}
}

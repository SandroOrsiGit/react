import { ADD_TO_TRACKER } from "./actions";

let initialState = {
	creatures: [
		{
			name: "Grignr",
			hp: 35,
			img_url:
				"https://preview.redd.it/the-man-too-dumb-to-die-i-present-grignr-grignrson-v0-znv1qtahf3ya1.png?width=1024&format=png&auto=webp&s=4bd3979279597a44a8fb1aa9f3fb1dd0a5758895",
		},
	],
};

export default function (state = initialState, action) {
	switch (action.type) {
		case ADD_TO_TRACKER:
			let newState = { ...state };

			for (let i = 0; i < action.count; i++) {
				newState = {
					...newState,
					creatures: [...newState.creatures, action.creature],
				};
			}

			return newState;

		default:
			return state;
	}
}

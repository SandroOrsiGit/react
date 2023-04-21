import { INCREMENT, DECREMENT, RESET } from "./actions";

import { combineReducers } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

function counter(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + action.amount,
      };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - action.amount,
      };
    case RESET:
      return {
        ...state,
        counter: action.value,
      };
  }

  return state;
}

export default combineReducers({ counter });

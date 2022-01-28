import { ActionTypes } from "../constants/action-types";
const intialState = {
  pizzas: [],
};

export const pizzasReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PIZZAS:
      return { ...state, pizzas: payload };
      
    default:
      return state;
  }
};

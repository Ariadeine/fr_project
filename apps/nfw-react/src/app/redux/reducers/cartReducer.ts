import { ActionTypes } from "../constants/action-types";
const intialState = {
    pizza: [],
    total: 0
};

export const cartReducer = (state = intialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.GET_CART:
            return { ...state };
        case ActionTypes.ADD_PIZZA_TO_CART:
            return { ...state, pizza: [...state.pizza, payload], total: state.total + payload.price };
        case ActionTypes.REMOVE_PIZZA_FROM_CART:
            console.log(payload, [...state.pizza].splice(payload.index, 1))
            let newPizzaState = [...state.pizza];
            newPizzaState.splice(payload.index, 1);
            return { ...state, pizza: [...newPizzaState], total: state.total - payload.pizza.price };
        case ActionTypes.CLEAR_CART:
            return { ...state, pizza: [], total: 0 };
        default:
            return state;
    }
};

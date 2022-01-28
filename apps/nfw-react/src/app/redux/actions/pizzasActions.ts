import { Pizza } from '../../types/pizza';
import { ActionTypes } from '../constants/action-types';

export const setPizzas = (pizzas: Pizza[]) => {
  return {
    type: ActionTypes.SET_PIZZAS,
    payload: pizzas,
  };
};

export const getCart = () => {
  return {
    type: ActionTypes.GET_CART
  };
};

export const addPizzaToCart = (pizza: Pizza) => {
  return {
    type: ActionTypes.ADD_PIZZA_TO_CART,
    payload: pizza,
  };
};

export const removePizzaFromCart = (pizza: Pizza, index: number) => {
  return {
    type: ActionTypes.REMOVE_PIZZA_FROM_CART,
    payload: { pizza, index },
  };
};

export const clearCart = () => {
  return {
    type: ActionTypes.CLEAR_CART,
  };
};

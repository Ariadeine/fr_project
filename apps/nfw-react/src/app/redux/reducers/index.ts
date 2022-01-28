import { combineReducers } from 'redux';
import { cartReducer } from './cartReducer';
import { pizzasReducer } from './pizzasReducer';

const reducers = combineReducers({
  allPizzas: pizzasReducer,
  cart: cartReducer
});

export default reducers;

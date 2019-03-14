import { createStore, combineReducers, compose } from "redux";
import cartReducer from "./reducers/cart.js";

// enable Redux DevTools Extension for debugging
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      cart: cartReducer
    }),
    composeEnhancers()
  );
  return store;
};

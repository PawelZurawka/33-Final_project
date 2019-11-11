import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import cartReducer from './cartRedux';
import products from './productsRedux';

//combine reducers
const rootReducer = combineReducers({
  products: products,
  cart: cartReducer
});

// create store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;

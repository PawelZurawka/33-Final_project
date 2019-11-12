import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import cartReducer from './cartReducer'
import productsReducer from './productReducer'

//combine reducers
const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
})

// create store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware()))

export default store

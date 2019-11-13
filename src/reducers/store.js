import { createStore, combineReducers } from 'redux'
import cartReducer from './cartReducer'
import productReducer from './productReducer'

//combine reducers
const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
})

// create store
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store

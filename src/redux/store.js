import { createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"

import { CartReducer } from './reducers/Cart'
import { UserReducer } from "./reducers/User"
 
const reducer = combineReducers({
    user: UserReducer,
    cart: CartReducer,
})

const initialState={
    user:{currentUser:{}},
    cart:{userCart:{}}
}

const store = createStore(
    reducer,
    initialState,
    applyMiddleware(thunk)
)

export default store
import { createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"

import { CartReducer } from './reducers/Cart'
import { UserReducer } from "./reducers/User"
import { CheckoutReducer } from "./reducers/Checkout"

const reducer = combineReducers({
    user: UserReducer,
    cart: CartReducer,
    checkout: CheckoutReducer
})

const initialState = {
    user: { currentUser: {} },
    cart: {
        subtotal:0,
        userCart: [{
            product_name: "Jordan for Mens",
            product_id: "621b9e2f0df9ccbd0e2e5155",
            image: "https://picsum.photos/100",
            price: 19999,
            brand: "Jordan",
            payable: 19999,
            quantity: 1
        }, {
            product_name: "Jordan for women",
            product_id: "621b9e2f0df9ccbd0e2e5154",
            image: "https://picsum.photos/100",
            price: 29999,
            brand: "Jordan",
            payable: 19999,
            quantity: 1
        }, {
            product_name: "Jordan for kids",
            product_id: "621b9e2f0df9ccbd0e2e5152",
            image: "https://picsum.photos/100",
            price: 12999,
            brand: "Jordan",
            payable: 12999,
            quantity: 1
        }]
    },
    checkout:{
        step:2,
        steps:[{
            name: "Shipping Address",
            state: 1
        }, {
            name: "Payment",
            state: 1
        }, {
            name: "Place Order",
            state: 0
        }]
    }
}

const store = createStore(
    reducer,
    initialState,
    applyMiddleware(thunk)
)

export default store
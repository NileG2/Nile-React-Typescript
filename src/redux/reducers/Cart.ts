import { actions } from "../constants/Cart";

export const CartReducer = (state: CartInterface, action: CartAction) => {
    switch (action.type) {
        case actions.ADD_ITEM:
            //handler
            return { ...state }
        case actions.REMOVE_ITEM:
            //handler
            return { ...state }
        case actions.SET_QUANTITY:
            //handler
            return { ...state }
        default:
            return {...state}
    }
}
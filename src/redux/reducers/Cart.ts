import { actions } from "../constants/Cart";

export const CartReducer = (state:any={}, action: any) => {
    switch (action.type) {
        case actions.ADD_ITEM:
            //handler
            return { ...state,userCart:action.payload.products }
        
        case actions.REMOVE_ITEM:
            //handler
            return { ...state,userCart:action.payload.products }

        case actions.SET_QUANTITY:
            //handler
            var allProducts = state.userCart
            let requiredProduct = action.payload.product
            allProducts[action.payload.index] = requiredProduct
            console.log(allProducts)
            return { ...state,userCart:allProducts }

        case actions.SET_SUBTOTAL:
            return {...state,subtotal:action.payload.subtotal}
        
        default:
            return {...state}
    }
}
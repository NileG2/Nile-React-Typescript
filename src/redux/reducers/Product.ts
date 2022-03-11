import { actions } from "../constants/Product";

export const ProductReducer = (state:any={}, action:any) => {
    switch (action.type) {
        case actions.ADD_PRODUCT:
            return { ...state, product:action.payload.product }
        case actions.DELETE_PRODUCT:
            //handler
            return { ...state, prodId:action.payload.prodId }
        case actions.UPDATE_PRODUCT:
            //handler
            return { ...state }
        case actions.GET_PRODUCT_DETAILS:
            //hanlder
            return { ...state }
        case actions.GET_PRODUCT_LIST:
            return {...state, productList : action.payload.productArray}
        default:
            return { ...state }
    }
}
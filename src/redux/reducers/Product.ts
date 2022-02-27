import { actions } from "../constants/Product";

export const ProductReducer = (state: ProductInterface, action: ProductAction) => {
    switch (action.type) {
        case actions.ADD_PRODUCT:
            //handler
            return { ...state }
        case actions.DELETE_PRODUCT:
            //handler
            return { ...state }
        case actions.UPDATE_PRODUCT:
            //handler
            return { ...state }
        case actions.GET_PRODUCT_DETAILS:
            //hanlder
            return { ...state }
        default:
            return { ...state }
    }
}
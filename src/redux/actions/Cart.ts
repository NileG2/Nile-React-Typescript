import { actions } from '../constants/Cart'

export const setItemQuantity = (product: any, index: number) => async (dispatch: any) => {
    try {
        dispatch({
            type: actions.SET_QUANTITY,
            payload: {
                product: product,
                index: index
            }
        })
    } catch (err) {
        console.log(err)
    }
}

export const setCartSubTotal = (subtotal: number) => async (dispatch: any) => {
    try {
        dispatch({
            type: actions.SET_SUBTOTAL,
            payload: {
                subtotal: subtotal
            }
        })
    } catch (err) {
        console.log(err)
    }
}

export const addItemToCart = (products: any[]) => async (dispatch: any) => {
    try {
        dispatch({
            type: actions.ADD_ITEM_TO_CART,
            payload: {
                products: products
            }
        })
    } catch (err) {
        console.log(err)
    }
}

export const removeItemFromCart = (requiredProducts: []) => async (dispatch: any) => {
    try {
        dispatch({
            type: actions.REMOVE_ITEM_FROM_CART,
            payload: {
                products: requiredProducts
            }
        })
    } catch (err) {
        console.log(err)
    }
}

export const initializeCart = (products: [], subtotal: number) => async (dispatch: any) => {
    try {
        dispatch({
            type: actions.ADD_ITEM_TO_CART,
            payload: {
                products: products
            }
        })
        dispatch({
            type: actions.SET_SUBTOTAL,
            payload: {
                subtotal: subtotal
            }
        })
    } catch (err) {
        console.log(err)
    }
}
import { actions } from '../constants/Watchlist'

export const addItem = (products: any[]) => async (dispatch: any) => {
    try {
        dispatch({
            type: actions.ADD_ITEM,
            payload: {
                products: products
            }
        })
    } catch (err) {
        console.log(err)
    }
}

export const removeItem = (requiredProducts: []) => async (dispatch: any) => {
    try {
        dispatch({
            type: actions.REMOVE_ITEM,
            payload: {
                products: requiredProducts
            }
        })
    } catch (err) {
        console.log(err)
    }
}

export const initializeWatchlist = (products: []) => async (dispatch: any) => {
    try {
        dispatch({
            type: actions.ADD_ITEM,
            payload: {
                products: products
            }
        })
    } catch (err) {
        console.log(err)
    }
}
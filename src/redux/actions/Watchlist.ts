import { actions } from '../constants/Watchlist'

export const addItemToWatchlist = (products: any[]) => async (dispatch: any) => {
    try {
        dispatch({
            type: actions.ADD_ITEM_TO_WATCHLIST,
            payload: {
                products: products
            }
        })
    } catch (err) {
        console.log(err)
    }
}

export const removeItemFromWatchlist = (requiredProducts: []) => async (dispatch: any) => {
    try {
        dispatch({
            type: actions.REMOVE_ITEM_FROM_WATCHLIST,
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
            type: actions.ADD_ITEM_TO_WATCHLIST,
            payload: {
                products: products
            }
        })
    } catch (err) {
        console.log(err)
    }
}
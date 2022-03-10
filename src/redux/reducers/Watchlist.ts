import { actions } from "../constants/Watchlist";

export const WatchlistReducer = (state:any={}, action: any) => {
    switch (action.type) {
        case actions.ADD_ITEM_TO_WATCHLIST:
            //handler
            return { ...state,userWatchlist:action.payload.products }
        
        case actions.REMOVE_ITEM_FROM_WATCHLIST:
            //handler
            return { ...state,userWatchlist:action.payload.products }
    
        default:
            return {...state}
    }
}
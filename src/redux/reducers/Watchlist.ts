import { actions } from "../constants/Watchlist";

export const WatchlistReducer = (state:any={}, action: any) => {
    switch (action.type) {
        case actions.ADD_ITEM:
            //handler
            return { ...state,userWatchlist:action.payload.products }
        
        case actions.REMOVE_ITEM:
            //handler
            return { ...state,userWatchlist:action.payload.products }
    
        default:
            return {...state}
    }
}
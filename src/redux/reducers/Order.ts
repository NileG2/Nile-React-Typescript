import { actions } from "../constants/Order";

export const OrderReducer = (state={},action:any)=>{
    switch(action.type){
        case actions.FETCH_ORDER_HISTORY:
            return {...state}
        default:
            return {...state}
    }
}
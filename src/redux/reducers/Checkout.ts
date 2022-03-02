import { actions } from "../constants/Checkout"

export const CheckoutReducer=(state:any={},action:any)=>{
    switch(action.type){
        case actions.SET_STEP_INDEX:
            return {...state,step:action.payload.step}

        case actions.NAVIGATE_STEPS:
            return {...state,step:action.payload.step} 
        default:
            return {...state}
    }
}
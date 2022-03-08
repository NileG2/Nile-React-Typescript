import { actions } from "../constants/BuyerPayment";

export const BuyerPaymentReducer =  (state:any={}, action:any) =>{
    switch(action.type){
        case actions.FETCH_DATA_FROM_FIRESTORE : 
            // console.log(action.payload.paymentInfo)
            return {...state, BuyerPaymentList : action.payload.paymentInfo};

        case actions.SET_DATA_FROM_CLIENT: 
            console.log(action.payload.paymentInfos)
            return {...state, BuyerPayment : action.payload.paymentInfos};

        case actions.ADD_NEW_PAYMENT_MODE:
            return {...state, BuyerPaymentList : action.payload.allPaymentMode}

        default: 
            return {...state}
    }
}
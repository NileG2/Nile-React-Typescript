import { actions } from "../constants/Checkout";

export const nextStep=(index:number,steps:any[])=>async(dispatch:any)=>{
    let requiredIndex = 0
    if(index+1<3){
        requiredIndex=index+1
    }else{
        requiredIndex=2
    }
    dispatch({
        type:actions.SET_STEP_INDEX,
        payload:{
            step:requiredIndex,
            steps:steps
        }
    })
}

export const navigateSteps=(index:number)=>async(dispatch:any)=>{
    dispatch({
        type:actions.SET_STEP_INDEX,
        payload:{
            step:index
        }
    })
}

export const setDeliveryAddress=(address:any)=>async(dispatch:any)=>{
    dispatch({
        type:actions.SET_DELIVERY_ADDRESS,
        payload:{
            address:address
        }
    })
}
export const setBillingAddress=(address:any)=>async(dispatch:any)=>{
    dispatch({
        type:actions.SET_BILLING_ADDRESS,
        payload:{
            address:address
        }
    })
}
export const setPaymentOption = (paymentOption:any)=>async(dispatch:any)=>{
    dispatch({
        type:actions.SET_PAYMENT_OPTION,
        payload:{
            paymentOption:paymentOption
        }
    })
}
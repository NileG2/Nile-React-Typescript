import { async } from "@firebase/util"
import { actions } from "../constants/BuyerPayment"

export const getPayment = (paymentInfo : any) => async(dispatch:any)=>{
    try{
        dispatch({
            type:actions.FETCH_DATA_FROM_FIRESTORE,
            payload:{
                paymentInfo : paymentInfo
            }
        })
    }
    catch(err){
        console.log(err)
    }
}


export const setPayment = (paymentInfos : any) => async(dispatch:any)=>{
    try{
        dispatch({
            type:actions.SET_DATA_FROM_CLIENT,
            payload:{
                paymentInfos : paymentInfos,

            }
        })
    }
    catch(err){
        console.log(err)
    }
}

export const addNewPayment = (paymentList : any) => async(dispatch : any ) =>{
    try{
        dispatch({
            type:actions.ADD_NEW_PAYMENT_MODE,
            payload:{
                allPaymentMode : paymentList,

            }
        })
    }
    catch(err){
        console.log(err)
    }
}
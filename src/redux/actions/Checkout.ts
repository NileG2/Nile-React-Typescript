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
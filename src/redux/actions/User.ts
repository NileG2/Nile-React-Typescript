import { LoginObjectInterface, SignupObjectInterface } from '../../interfaces/login'
import {actions} from '../constants/User'

export const userLogin=(loginObject:LoginObjectInterface)=>async(dispatch:any)=>{
    try{
        // // example code
        // const action:UserAction={
        //     type: actions.LOGIN_REQUEST,
        //     loginObject: loginObject
        // }
        // dispatch(action)
    }catch(err){
        console.log(err)
    }
}

export const userSignup=(signupObject:SignupObjectInterface)=>async(dispatch:any)=>{
    try{
        // // example code
        // const action:UserAction={
        //     type: actions.SIGNUP_REQUEST,
        //     signupObject: signupObject
        // }
        // dispatch(action)
    }catch(err){
        console.log(err)
    }
}
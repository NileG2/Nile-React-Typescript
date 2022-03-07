import {actions} from '../constants/UserDetails'

export const UserDetailsReducer=(state:any={},action:any)=>{
switch(action.type){
    case actions.FETCH_USER_ADDRESS:
        // console.log(action.payload.allAddresses)
        return {...state,addressList:action.payload.allAddresses}
    case actions.UPDATE_USER_ADDRESS:
        console.log("Index = "+action.payload.i)
        return {...state,currAddress:action.payload.address, addressIndex:action.payload.i}
    default:
        return {...state}
    }
}
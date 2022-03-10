import { async } from "@firebase/util";
import { actions } from "../constants/UserDetails";

export const fetchAllAddresses =(addressArray: any) => async (dispatch: any) => {
    try {
      dispatch({
          type:actions.FETCH_USER_ADDRESS,
          payload:{
              allAddresses:addressArray
          }
      })
    } catch (err) {
      console.log(err);
    }
  };


export const setAddress = (addressInfos : any) => async(dispatch:any)=>{
  try{
      dispatch({
          type:actions.UPDATE_USER_ADDRESS,
          payload:{
              addressInfos : addressInfos,

          }
      })
  }
  catch(err){
      console.log(err)
  }
}

export const addNewAddress = (addressList : any) => async(dispatch : any ) =>{
  try{
      dispatch({
          type:actions.ADD_USER_ADDRESS,
          payload:{
              alladdress : addressList

          }
      })
  }
  catch(err){
      console.log(err)
  }
}
import { async } from "@firebase/util";
import { actions } from "../constants/UserDetails";

export const setCurrAddressForEdit =
  (address:any, i:number) => async (dispatch: any) => {
    try {
      // console.log(address)
      dispatch({
        type:actions.UPDATE_USER_ADDRESS,
        payload:{
          address:address,
          i : i
        }
      })
    } catch (err) {
      console.log(err);
    }
  };

export const fetchAllAddresses =
  (addressArray: any) => async (dispatch: any) => {
    try {
      //
      // console.log("Action = "+ addressArray)
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


export const addNewAddress = (addressArray:any) =>  async (dispatch: any) => {
  try {
    dispatch({
        type:actions.ADD_USER_ADDRESS,
        payload:{
            allAddresses:addressArray
        }
    })
  } catch (err) {
    console.log(err);
  }
}
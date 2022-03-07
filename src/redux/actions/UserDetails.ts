import { async } from "@firebase/util";
import { actions } from "../constants/UserDetails";

export const setCurrAddressForEdit =
  (address:any, i:number) => async (dispatch: any) => {
    try {
      // console.log("Action Index = "+i)
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
      // console.log(addressArray)
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

import { actions } from "../constants/UserDetails";

export const UserDetailsReducer = (state: any = {}, action: any) => {
  switch (action.type) {
    case actions.FETCH_USER_ADDRESS:
      console.log("Red = "+ action.payload.allAddresses)
      return { ...state, addressList: action.payload.allAddresses };
    case actions.UPDATE_USER_ADDRESS:
      // console.log("Index = "+action.payload.i)
      return {
        ...state,
        currAddress: action.payload.address,
        addressIndex: action.payload.i,
      };
    case actions.ADD_USER_ADDRESS:
      return {
        ...state,
        allAddress : action.payload.allAddress
      };
    default:
      return { ...state };
  }
};
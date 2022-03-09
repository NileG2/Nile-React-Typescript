import { actions } from "../constants/UserDetails";

export const UserDetailsReducer = (state: any = {}, action: any) => {
  switch (action.type) {
    case actions.FETCH_USER_ADDRESS:
      return { ...state, addressList: action.payload.allAddresses };

    case actions.UPDATE_USER_ADDRESS:
      return { ...state, currAddress: action.payload.addressInfos };

    case actions.ADD_USER_ADDRESS:
      return { ...state, addressList : action.payload.alladdress  };

    default:
      return { ...state };
  }
};
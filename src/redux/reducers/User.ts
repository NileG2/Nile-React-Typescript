import { actions } from "../constants/User";

export const UserReducer = (state: any, action: any) => async (dispatch: any) => {
    switch (action.type) {
        case actions.LOGIN_REQUEST:
            return { ...state }
        case actions.LOGIN_SUCCESS:
            return { ...state }
        case actions.LOGIN_FAILED:
            return { ...state }
        case actions.SIGNUP_FAILED:
            return { ...state }
        case actions.SIGNUP_REQUEST:
            return { ...state }
        case actions.SIGNUP_SUCCESS:
            return { ...state }
        default:
            return { ...state }

    }
}
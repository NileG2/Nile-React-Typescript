import { actions } from "../constants/Checkout"

export const CheckoutReducer = (state: any = {}, action: any) => {
    switch (action.type) {
        case actions.SET_STEP_INDEX:
            return { ...state, step: action.payload.step }

        case actions.NAVIGATE_STEPS:
            return { ...state, step: action.payload.step }

        case actions.SET_BILLING_ADDRESS:
            return { ...state, billingAddress: action.payload.address }

        case actions.SET_DELIVERY_ADDRESS:
            return { ...state, deliveryAddress: action.payload.address }

        case actions.SET_PAYMENT_OPTION:
            return {...state,paymentMode:action.payload.paymentOption}

        default:
            return { ...state }
    }
}
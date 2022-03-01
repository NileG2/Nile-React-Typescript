import { actions } from '../constants/Cart'

export const setItemQuantity = (product: any, index: number) => async (dispatch: any) => {
    try {
        dispatch({
            type: actions.SET_QUANTITY,
            payload: {
                product: product,
                index: index
            }
        })
    } catch (err) {
        console.log(err)
    }
}

export const setCartSubTotal = (subtotal:number)=>async(dispatch:any)=>{
    try{
        dispatch({
            type: actions.SET_SUBTOTAL,
            payload:{
                subtotal:subtotal
            }
        })
    }catch(err){
        console.log(err)
    }
}

export const addItem = (products: any[]) => async (dispatch: any) => {
    try {
        dispatch({
            type: actions.ADD_ITEM,
            payload: products
        })
    } catch (err) {
        console.log(err)
    }
}

export const removeItem = (requiredProducts: []) => async (dispatch: any) => {
    try {
        dispatch({
            type: actions.REMOVE_ITEM,
            payload: {
                products: requiredProducts
            }
        })
    } catch (err) {
        console.log(err)
    }
}
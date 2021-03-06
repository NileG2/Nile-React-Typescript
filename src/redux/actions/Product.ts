import {actions} from '../constants/Product'

export const createProduct=(product:ProductInterface)=>async(dispatch:any)=>{
    try{
        dispatch({
            type : actions.ADD_PRODUCT,
            payload:{
                product : product
            }
        })
    }catch(err){
        console.log(err)
    }
}


export const updateProduct=(product:ProductInterface)=>async(dispatch:any)=>{
    try{
        
    }catch(err){
        console.log(err)
    }
}

export const deleteProduct=(id:String)=>async(dispatch:any)=>{
    try{
        dispatch({
            type:actions.DELETE_PRODUCT,
            payload : {
                prodId : id
            }
        })
    }catch(err){
        console.log(err)
    }
}

export const getProductDetails = (id:String)=>async(dispatch:any)=>{
    try{
        
    }catch(err){
        console.log(err)
    }
}

export const getProductList = (productArray:any)=>async(dispatch:any)=>{
    try{
        dispatch({
            type: actions.GET_PRODUCT_LIST,
            payload : {
                productArray : productArray
            }
        })
    }catch(err){
        console.log(err)
    }
}
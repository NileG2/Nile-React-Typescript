import React, { useEffect } from 'react'
import CartCard from '../../components/cart/CartCard'
import CheckoutSidebar from '../../components/checkoutSidebar/CheckoutSidebar'
import {setCartSubTotal} from '../../redux/actions/Cart'
import { useDispatch,useSelector } from 'react-redux'
import NavBar from '../../components/nav/NavBar'

const Cart = () => {

    const dispatch = useDispatch()

    const productsFromCart = useSelector((state: any) => state.cart.userCart)

    useEffect(() => {
        function setSubTotal(products:[]){
            function getSubTotal(products: any[]) {
                let sum = 0
                for (let i = 0; i < products.length; i++) {
                    sum += products[i].payable
                }
                return sum
            }
            dispatch(setCartSubTotal(getSubTotal(products)))
        }

        setSubTotal(productsFromCart)
    },[])

    return (
        <div className='std-bg'>
            <NavBar/>
            <div className='row m-1'>
                <div className='col-9'>
                    <CartCard />
                </div>
                <div className='col-3'>
                    <CheckoutSidebar />
                </div>
            </div>
        </div>
    )
}

export default Cart
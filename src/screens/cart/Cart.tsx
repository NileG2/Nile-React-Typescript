import React, { useEffect } from 'react'
import CartCard from '../../components/cart/CartCard'
import CheckoutSidebar from '../../components/checkoutSidebar/CheckoutSidebar'

const Cart = () => {

    return (
        <div className='std-bg'>
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
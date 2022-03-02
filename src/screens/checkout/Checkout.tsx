import React from 'react'
import CheckoutContainer from '../../components/checkoutComponents/CheckoutContainer'
import CheckoutSidebar from '../../components/checkoutSidebar/CheckoutSidebar'

const Checkout = () => {
    return (
        <div className='std-bg'>
            <div className='row m-1'>
                <div className='col-9'>
                    <CheckoutContainer/>
                </div>
                <div className='col-3'>
                    <CheckoutSidebar/>
                </div>
            </div>
        </div>
    )
}

export default Checkout
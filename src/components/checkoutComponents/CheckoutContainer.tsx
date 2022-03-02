import React, { useState, useEffect } from 'react'
import './CheckoutStyles.scss'
import Steps from '../helpers/Steps'
import AddressSelect from './AddressSelect'
import PaymentSelect from './PaymentSelect'
import PlaceOrder from './PlaceOrder'

import { useSelector } from 'react-redux'

const CheckoutContainer = () => {
    const steps = useSelector((state:any)=>state.checkout.steps)
    const currStep = useSelector((state:any)=>state.checkout.step)

    function GetComponent() {
        switch (currStep) {
            case 0:
                return <AddressSelect/>
            case 1:
                return <PaymentSelect/>
            case 2:
                return <PlaceOrder/>
            default:
                return <AddressSelect/>
        }
    }

    return (
        <div className='Card Checkout'>
            <div className='std-card'>
                <div>
                    <p className='std-font3'>CHECKOUT</p>
                    <div className='std-section'></div>
                </div>
                <div className='container'>
                    <Steps steps={steps} />
                </div>
                <div>
                    <GetComponent/>
                </div>
            </div>
        </div>
    )
}

export default CheckoutContainer
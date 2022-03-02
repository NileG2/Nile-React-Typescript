import React, { useState, useEffect } from 'react'
import './CheckoutStyles.scss'
import Steps from '../helpers/Steps'

import AddressSelect from './AddressSelect'

const CheckoutContainer = () => {
    const [steps, setSteps] = useState([{
        name: "Shipping Address",
        state: 1
    }, {
        name: "Payment",
        state: 0
    }, {
        name: "Place Order",
        state: 0
    }])
    const [currStep, setCurrStep] = useState(0)

    function GetComponent() {
        switch (currStep) {
            case 0:
                return <AddressSelect/>
            case 1:
                return <>Payment component</>
            case 2:
                return <>Place order component</>
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
                    <GetComponent />
                </div>
            </div>
        </div>
    )
}

export default CheckoutContainer
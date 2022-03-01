import React, { useState } from 'react'

import { useSelector } from 'react-redux'

const CheckoutSidebar = () => {

    const [isCheckout, setIsCheckout] = useState(true)
    const [address, setAddress] = useState({
        name: "Aditya Dawadikar",
        addressLine1: "203 D, Crisil Towers",
        addressLine2: "Bandra West, Mumbai",
        pincode: 400050
    })

    const subtotal = useSelector((state:any)=>state.cart.subtotal) 

    return (
        <div className='std-card'>
            <div>
                <p className='p-2 m-0 text-left std-font2'>Subtotal (3 items)</p>
                <div className='d-flex'>
                    <p className='std-fontSmall m-1 std-font1' style={{ paddingTop: "10px" }}>INR</p>
                    <p className='std-boldFont m-1 std-font2'>{subtotal}</p>
                </div>
            </div>
            <div className='std-section'></div>
            {
                isCheckout === true ? <div>
                    <p className='p-2 m-0 text-left std-font2'>Deliver to</p>
                    <div className='p-1'>
                        <p className='std-boldFont std-font1  m-0'>{address.name}</p>
                        <p className='std-font1 m-0'>{address.addressLine1}</p>
                        <p className='std-font1 m-0'>{address.addressLine2}</p>
                        <div className='d-flex'>
                            <p className='std-font1 std-boldFont m-0'>Pincode: </p>
                            <p className='std-font1 m-0'>{address.pincode}</p>
                        </div>
                    </div>
                </div> : <></>
            }
            {
                isCheckout === true ? <button
                    className='std-btn std-btnOrange container'>
                    Proceed
                </button>
                    : <button
                        className='std-btn std-btnOrange container'
                    >Checkout</button>
            }
        </div>
    )
}

export default CheckoutSidebar
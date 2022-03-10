import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nextStep, setBillingAddress, setDeliveryAddress } from '../../redux/actions/Checkout'
import AddressBox from '../checkoutCards/AddressBox'
import AddressForm from '../forms/AddressForm'

const AddressSelect = () => {
    const dispatch = useDispatch()
    const steps = useSelector((state: any) => state.checkout.steps)
    const currStepIndex = useSelector((state: any) => state.checkout.step)

    const [addressList, setAddressList] = useState([{
        name: "Aditya Dawadikar",
        line1: "201 A, Uday Glorious park",
        line2: "Gawadewada, near Vaishnav devi temple",
        pincode: "411033"
    }, {
        name: "Aditya Prashant Dawadikar",
        line1: "201 A, Uday Glorious park",
        line2: "Gawadewada, near Vaishnav devi temple",
        pincode: "411033"
    }, {
        name: "Geekgod",
        line1: "201 A, Uday Glorious park",
        line2: "Gawadewada, near Vaishnav devi temple",
        pincode: "411033"
    }])
    const [currAddress, setCurrAddress] = useState(addressList[0])

    function handleNextStep(e: any) {
        e.preventDefault()
        let allSteps = steps
        allSteps[currStepIndex].state = 1
        dispatch(nextStep(currStepIndex, allSteps))
        dispatch(setDeliveryAddress(currAddress))
        dispatch(setBillingAddress(currAddress))
    }

    function handleCurrAddress(index: number) {
        console.log(addressList[index])
        setCurrAddress(addressList[index])
    }

    return (
        <div className='row'>
            <div className='col'>
                <div>
                    <p className='std-font2'>Selected Address</p>
                </div>
                <AddressBox address={currAddress} />
                <div>
                    <p className='std-font2'>Select From Saved Options</p>
                    <ul className='std-ul'>
                        {
                            addressList.map((address, index) => {
                                return <li key={index}>
                                    <div className='d-flex align-items-center'>
                                        <input type="radio" className='m-2' name="optradio" onChange={() => { handleCurrAddress(index) }} />
                                        <AddressBox address={address} />
                                    </div>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className='col'>
                <p className='std-font2'>Add other address for delivery</p>
                <AddressForm flag={false} />
                <div className='d-flex justify-content-center'>
                    <button className='std-btn std-btnOrange' style={{ width: "20rem" }} onClick={(e) => { handleNextStep(e) }}>Proceed</button>
                </div>
            </div>
        </div>
    )
}

export default AddressSelect
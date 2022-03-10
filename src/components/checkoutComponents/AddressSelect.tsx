import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nextStep, setBillingAddress, setDeliveryAddress } from '../../redux/actions/Checkout'
import AddressBox from '../checkoutCards/AddressBox'
import AddressForm from '../forms/AddressForm'
import { fetchAllAddresses } from '../../redux/actions/UserDetails'
import axios from 'axios'
import { toast } from 'react-toastify'

const AddressSelect = () => {

    let auth = JSON.parse(sessionStorage.getItem("user") || "{}");

    const dispatch = useDispatch()

    const steps = useSelector((state: any) => state.checkout.steps)
    const currStepIndex = useSelector((state: any) => state.checkout.step)
    const addressList = useSelector((state: any) => state.userDetails.addressList)

    const [currAddress, setCurrAddress] = useState(addressList[0] || null)

    useEffect(() => {
        axios
            .post("http://localhost:9000/api/user/", {
                userid: auth["userid"],
            })
            .then(({ data }) => {
                dispatch(fetchAllAddresses(data.status[0].Address));
            })
            .catch((err) => {
                toast.error(`${err}`);
            });
    }, []);

    function handleNextStep(e: any) {
        e.preventDefault()
        let allSteps = steps
        allSteps[currStepIndex].state = 1
        dispatch(nextStep(currStepIndex, allSteps))
        dispatch(setDeliveryAddress(currAddress))
        dispatch(setBillingAddress(currAddress))
    }

    function handleCurrAddress(index: number) {
        setCurrAddress(addressList[index])
    }

    return (
        <div className='row'>
            <div className='col'>
                <div>
                    {currAddress!==null?<p className='std-font2'>Selected Address</p>:<p className='std-font2'>Please Seleact an Address</p>}
                </div>
                {currAddress !== null ? <AddressBox address={currAddress} /> : <></>}
                <div>
                    <p className='std-font2'>Select From Saved Options</p>
                    <ul className='std-ul'>
                        {
                            addressList.map((address: any, index: number) => {
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
                <div className='d-flex justify-content-center m-2'>
                    <button className='std-btn std-btnOrange' style={{ width: "20rem" }} onClick={(e) => { handleNextStep(e) }}>Proceed</button>
                </div>
                <p className='std-font2'>Add other address for delivery</p>
                <AddressForm flag={false} />
            </div>
        </div>
    )
}

export default AddressSelect
import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {nextStep} from '../../redux/actions/Checkout'
import AddressBox from '../checkoutCards/AddressBox'

const AddressSelect = () => {
    const dispatch = useDispatch()
    const steps = useSelector((state:any)=>state.checkout.steps)
    const currStepIndex = useSelector((state:any)=>state.checkout.step)

    const [addressList, setAddressList] = useState([{
        name: "Aditya Dawadikar",
        line1: "201 A, Uday Glorious park",
        line2: "Gawadewada, near Vaishnav devi temple",
        pincode: "411033"
    }, {
        name: "Aditya Dawadikar",
        line1: "201 A, Uday Glorious park",
        line2: "Gawadewada, near Vaishnav devi temple",
        pincode: "411033"
    }, {
        name: "Aditya Dawadikar",
        line1: "201 A, Uday Glorious park",
        line2: "Gawadewada, near Vaishnav devi temple",
        pincode: "411033"
    }])
    const [currAddress, setCurrAddress] = useState(addressList[0])
    const [newAddress, setNewAddress] = useState({})

    function handleNextStep(e:any){
        e.preventDefault()
        let allSteps = steps
        allSteps[currStepIndex].state=1
        dispatch(nextStep(currStepIndex,allSteps))
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
                                        <input type="radio" className='m-2' name="optradio" onChange={(e) => { console.log(e.target.value) }} />
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
                <form className='m-2 std-card'>
                    <div className='row m-1'>
                        <label className='col-4'>Name</label>
                        <input className='std-inputField col-8'></input>
                    </div>
                    <div className='row m-1'>
                        <label className='col-4'>Address Line 1</label>
                        <input className='std-inputField col-8'></input>
                    </div>
                    <div className='row m-1'>
                        <label className='col-4'>Address Line 2</label>
                        <input className='std-inputField col-8'></input>
                    </div>
                    <div className='row m-1'>
                        <label className='col-4'>City</label>
                        <input className='std-inputField col-8'></input>
                    </div>
                    <div className='row m-1'>
                        <label className='col-4'>State</label>
                        <input className='std-inputField col-8'></input>
                    </div>
                    <div className='row m-1'>
                        <label className='col-4'>Country</label>
                        <input className='std-inputField col-8'></input>
                    </div>
                    <br/>
                    <div className='d-flex justify-content-center'>
                        <button className='std-btn std-btnOrange' style={{ width: "20rem" }} onClick={(e)=>{handleNextStep(e)}}>Proceed</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddressSelect
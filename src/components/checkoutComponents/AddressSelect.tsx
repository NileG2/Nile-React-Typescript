import React, { useState } from 'react'


function AddressBox(props: any) {
    return <div className='std-card m-1'>
        <p className='std-boldFont'>{props.address.name}</p>
        <p className='m-0'>{props.address.line1}</p>
        <p className='m-0'>{props.address.line2}</p>
        <p className='m-0'>{props.address.pincode}</p>
    </div>
}

const AddressSelect = () => {
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
    const [newAddress, setNewAddress] = useState({

    })
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
                        <button className='std-btn std-btnOrange' style={{ width: "20rem" }}>Proceed</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddressSelect
import React from 'react'

const AddressBox = (props:any) => {
    return <div className='std-card m-1 std-mode-dimension'>
        <p className='std-boldFont'>{props.address.name}</p>
        <p className='m-0'>{props.address.line1}</p>
        <p className='m-0'>{props.address.line2}</p>
        <p className='m-0'>{props.address.pincode}</p>
    </div>
}

export default AddressBox
import React from 'react'

const UPIComponent = (props:any) => {
    return <div className='std-card std-mode-dimension'>
        <p className='std-boldFont m-0'>{props.upi.type}</p>
        <p className='std-boldFont m-0'>{props.upi.details.upiId}</p>
        <p className='m-0'>Provider: {props.upi.details.prodvider}</p>
    </div>
}

export default UPIComponent
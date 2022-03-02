import React from 'react'

const Coupon = (props: any) => {
    return (
        <div className='std-card m-1 std-mode-dimension position-relative'>
            <div className='position-relative m-2'>
                <div className='std-font2 bg-light p-1'>Code {props.coupon.details.code.toUpperCase()}</div>
                <p className='std-font2 std-greenText'>Get Flat -{props.coupon.details.amount}</p>
                <p className='m-0'>{props.coupon.details.description}</p>
            </div>
        </div>
    )
}

export default Coupon
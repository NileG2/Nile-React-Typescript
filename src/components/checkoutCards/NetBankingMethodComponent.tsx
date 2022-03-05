import React from 'react'
import { AiFillDelete } from 'react-icons/ai'

const NetBankingMethodComponent = (props: any) => {
    return <div className='std-card std-mode-dimension'>
        <p className='std-boldFont m-0'>{props.bank.type}</p>
        <p className='std-boldFont m-0'>{props.bank.details.accountNumber}</p>
        <p className='m-0'>Bank: {props.bank.details.name}</p>
        {
            props.edit === true ? <button className='std-btn  std-btnOrange'>
                <AiFillDelete /> Remove
            </button> : <></>
        }
    </div>
}

export default NetBankingMethodComponent
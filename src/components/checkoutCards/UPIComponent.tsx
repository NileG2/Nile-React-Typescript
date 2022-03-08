import axios from 'axios'
import React, { useState } from 'react'
import {AiFillDelete} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import {getPayment} from '../../redux/actions/BuyerPayment'

const UPIComponent = (props:any) => {

    let buyerPaymentList = useSelector((state:any)=>state.buyerPaymentInfo.BuyerPaymentList )
    const dispatch = useDispatch()

    const deletePaymentOption = (e:any, index:number) =>{
        let data = buyerPaymentList.filter((ele:any,ind:number)=>{ return ind !==index })
        try{
          axios.delete(`http://localhost:9000/api/payment/delete/${index}`)
          alert("Payment method successfully deleted")
          dispatch(getPayment(data))
        }
        catch(err){
          console.log(err)
        }
      }

    return <div className='std-card std-mode-dimension'>
        <p className='std-boldFont m-0'>{props.upi.BankingInfo.payment_type}</p>
        <p className='std-boldFont m-0'>{props.upi.BankingInfo.upi_id}</p>
        {
            props.edit === true ? <button className='std-btn std-btnOrange' onClick={(e) => deletePaymentOption(e, props.index)}>
                <AiFillDelete /> Remove
            </button> : <></>
        }
        
    </div>
}

export default UPIComponent
import axios from 'axios'
import React, { useEffect } from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { setPayment, getPayment } from '../../redux/actions/BuyerPayment'

const CardMethodComponent = (props: any) => {

  let buyerPaymentList = useSelector((state: any) => state.buyerPaymentInfo.BuyerPaymentList)
  const dispatch = useDispatch()

  function getPresentableNumber(number: string) {
    let tokens = number.slice(number.length-4)
    let dummy = "XXXX-XXXX-XXXX-"
    return dummy + tokens
  }

  let auth = JSON.parse(sessionStorage.getItem("user") || "{}");
  const deletePaymentOption = (e: any, index: number) => {
    let data = buyerPaymentList.filter((ele: any, ind: number) => { return ind !== index })
    try {
      axios.delete(`http://localhost:9000/api/payment/delete/${index}`, {
        data: { userid: auth['userid'] }
      })
      toast.success("Payment method successfully deleted")
      dispatch(getPayment(data))
    }
    catch (err) {
      console.log(err)
    }
  }

  return <div className='std-card std-mode-dimension'>
    {/* <p className='std-boldFont m-0'>{props.card.BankingInfo.card_type}</p> */}
    <p className='std-boldFont m-0'>{getPresentableNumber(props.card.BankingInfo.card_number)}</p>
    <p className='m-0'>Expiry: {props.card.BankingInfo.expiry_month} / {props.card.BankingInfo.expiry_year}</p>
    <p className='m-0'>Name: {props.card.BankingInfo.name_on_card}</p>
    {
      props.edit === true ? <button className='std-btn  std-btnOrange' onClick={(e) => deletePaymentOption(e, props.index)}>
        <AiFillDelete /> Remove
      </button> : <></>
    }
  </div>
}

export default CardMethodComponent
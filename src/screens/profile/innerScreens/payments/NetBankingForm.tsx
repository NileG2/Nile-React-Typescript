import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNewPayment, setPayment } from '../../../../redux/actions/BuyerPayment'

const NetBankingForm = () => {

    let BuyerPayment = useSelector((state:any)=>state.buyerPaymentInfo.BuyerPayment )
    let buyerPaymentList = useSelector((state:any)=>state.buyerPaymentInfo.BuyerPaymentList )

    const dispatch = useDispatch()

    const [FormData, setFormData] = useState({
        bank_name : "",
        account_number : "",
        ifsc : "",
        branch : "",
        payment_type : "netbanking"
    })

    const onChangeHandler = (e:any)=>{
        e.preventDefault()
        setFormData( {...FormData, [e.target.name] : e.target.value})
    }

    const addDetail = (e:any)=>{
        e.preventDefault();
        let BuyerPayment = {BankingInfo : FormData}
        dispatch(setPayment(BuyerPayment))
        let allPaymentList = buyerPaymentList
        allPaymentList.push(BuyerPayment)
        axios.post("http://localhost:9000/api/payment/payment",{
            BankingInfo : FormData
          }).then((resp)=>{
            alert("Payment method added Info")
            dispatch(addNewPayment(allPaymentList))
          })
    }

    return (
        <div className="std-card" id="menu-2" >
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                    Bank Name 
                </label>
                <input
                    type="text"
                    className="form-control"
                    name="bank_name"
                    onChange={(e)=> onChangeHandler(e)}
                />
            </div>
    
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                    Account Number 
                </label>
                <input
                    type="text"
                    className="form-control"
                    name="account_number"
                    onChange={(e)=> onChangeHandler(e)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                    IFSC Code 
                </label>
                <input
                    type="text"
                    className="form-control"
                    name="ifsc"
                    onChange={(e)=> onChangeHandler(e)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                    Branch
                </label>
                <input
                    type="text"
                    className="form-control"
                    name="branch"
                    onChange={(e)=> onChangeHandler(e)}
                />
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                <button type="button" className="std-btn std-btnOrange" onClick={(e)=>{addDetail(e)}}>
                    Save
                </button>
            </div>
        </div>
    )
}

export default NetBankingForm
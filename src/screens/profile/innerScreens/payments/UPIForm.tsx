import axios from "axios";
import e from "express";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addNewPayment, setPayment } from "../../../../redux/actions/BuyerPayment";

const UPIForm = () => {
    let BuyerPayment = useSelector((state:any)=>state.buyerPaymentInfo.BuyerPayment );
    const buyerPaymentList = useSelector((state:any)=>state.buyerPaymentInfo.BuyerPaymentList );

    const dispatch = useDispatch();

    const [FormData, setFormData] = useState({
        upi_id : "",
        payment_type : "upi"
    });

    const onChangeHandler = (e:any)=>{
        e.preventDefault();
        setFormData( {...FormData, [e.target.name] : e.target.value});
    };

    const auth = JSON.parse(sessionStorage.getItem("user") || "{}");
    const addDetail = (e:any)=>{
        e.preventDefault();
        BuyerPayment = {BankingInfo : FormData };
        dispatch(setPayment(BuyerPayment));
        const allPaymentList = buyerPaymentList;
        allPaymentList.push(BuyerPayment); 
        axios.post("http://localhost:9000/api/payment/add",{
            userid : auth["userid"],
            BankingInfo : FormData
        }).then((resp)=>{
            toast.success("Payment method added Info");
            dispatch(addNewPayment(allPaymentList));
        });
        
    };

    return (
        <div className="std-card" id="menu-3">
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                    Enter VPA/UPI id
                </label>
                <input
                    type="text"
                    className="form-control"
                    name="upi_id"
                    onChange={(e)=> onChangeHandler(e)}
                />
            </div>

            <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                <button type="button" className="std-btn std-btnOrange" onClick={(e)=>addDetail(e)}>
                    Save
                </button>
            </div>
        </div>
    );
};

export default UPIForm;
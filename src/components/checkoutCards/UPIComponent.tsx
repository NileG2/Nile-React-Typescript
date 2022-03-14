import axios from "axios";
import React, { useState } from "react";
import {AiFillDelete} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {getPayment} from "../../redux/actions/BuyerPayment";

const UPIComponent = (props:any) => {

    const buyerPaymentList = useSelector((state:any)=>state.buyerPaymentInfo.BuyerPaymentList );
    const dispatch = useDispatch();
    const auth = JSON.parse(sessionStorage.getItem("user") || "{}");

    const deletePaymentOption = (e:any, index:number) =>{
        const data = buyerPaymentList.filter((ele:any,ind:number)=>{ return ind !==index; });
        try{
            axios.delete(`http://localhost:9000/api/payment/delete/${index}`,{
                data : {userid : auth["userid"]}
            });
            toast.success("Payment method successfully deleted");
            dispatch(getPayment(data));
        }
        catch(err){
            console.log(err);
        }
    };

    return <div className='std-card std-mode-dimension'>
        <p className='std-boldFont m-0'>{props.upi.BankingInfo.payment_type}</p>
        <p className='std-boldFont m-0'>{props.upi.BankingInfo.upi_id}</p>
        {
            props.edit === true ? <button className='std-btn std-btnOrange' onClick={(e) => deletePaymentOption(e, props.index)}>
                <AiFillDelete /> Remove
            </button> : <></>
        }
        
    </div>;
};

export default UPIComponent;
import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addNewPayment, setPayment } from "../../../../redux/actions/BuyerPayment";
import { toast } from "react-toastify";

const DebitCreditCardForm = () => {

    const BuyerPayment = useSelector((state: any) => state.buyerPaymentInfo.BuyerPayment);
    const buyerPaymentList = useSelector((state: any) => state.buyerPaymentInfo.BuyerPaymentList);

    const dispatch = useDispatch();

    const [FormData, setFormData] = useState({
        card_number: "",
        cvv: "",
        expiry_month: "",
        expiry_year: "",
        name_on_card: "",
        payment_type: "debit/credit_card"
    });

    const onChangeHandler = (e: any) => {
        e.preventDefault();
        setFormData({ ...FormData, [e.target.name]: e.target.value });
    };

    const separateExpiry = (FormData: any) => {
        const expiry = FormData.expiry_month;
        FormData.expiry_month = expiry.split("-")[1];
        FormData.expiry_year = expiry.split("-")[0];
        return FormData;
    };

    const auth = JSON.parse(sessionStorage.getItem("user") || "{}");
    const addDetail = (e: any) => {
        e.preventDefault();
        const NewFormData = separateExpiry(FormData);
        const BuyerPayment = { BankingInfo: NewFormData };
        dispatch(setPayment(BuyerPayment));
        const allPaymentList = buyerPaymentList;
        allPaymentList.push(BuyerPayment);
        axios.post("http://localhost:9000/api/payment/add", {
            userid: auth["userid"],
            BankingInfo: NewFormData
        }).then((resp) => {
            toast.success("Payment method added Info");
            dispatch(addNewPayment(allPaymentList));
        });
    };

    return (
        <div className="std-card" id="menu-1">
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
          Card Number
                </label>
                <input
                    type="text"
                    className="form-control"
                    name="card_number"
                    onChange={(e) => onChangeHandler(e)}
                />
            </div>
            <div className="mb-3 ">
                <label htmlFor="exampleFormControlInput1" className="form-label">
          Expiry Month/Year
                </label> &nbsp;
                <input type="month" id="expiry" name="expiry_month" onChange={(e) => onChangeHandler(e)} />
        &emsp;
                <label htmlFor="exampleFormControlInput2" className="form-label">
          CVV
                </label>&nbsp;
                <input type="text" id="expiry" name="cvv" className="col-md-2" onChange={(e) => onChangeHandler(e)} />
            </div>

            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
          Name on card
                </label>
                <input
                    type="text"
                    className="form-control"
                    name="name_on_card"
                    onChange={(e) => onChangeHandler(e)}
                />
            </div>

            <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                <button type="button" className="std-btn std-btnOrange" onClick={(e) => addDetail(e)}>
          Save
                </button>
            </div>
        </div>
    );
};

export default DebitCreditCardForm;
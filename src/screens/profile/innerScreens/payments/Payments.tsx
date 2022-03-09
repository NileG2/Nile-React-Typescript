import React, { useState, useEffect } from "react";
import "./Payments.scss";
import NetBankingForm from "./NetBankingForm";
import UPIForm from "./UPIForm";
import DebitCreditCardForm from "./DebitCreditCardForm";

import CardMethodComponent from "../../../../components/checkoutCards/CardMethodComponent";
import NetBankingMethodComponent from "../../../../components/checkoutCards/NetBankingMethodComponent";
import UPIComponent from "../../../../components/checkoutCards/UPIComponent";

import { BsChevronDown } from "react-icons/bs";
import { Collapse, Button } from "react-bootstrap";
import axios from "axios";
import { async } from "@firebase/util";
import { useDispatch, useSelector } from "react-redux";
import { getPayment } from "../../../../redux/actions/BuyerPayment";

const Payments = () => {
  const [currForm, setCurrForm] = useState(0);
  const availableForms = ["Credit/Debit card", "Net banking", "UPI"];

  const dispatch = useDispatch()
  
  const buyerPaymentInfo = useSelector((state:any)=>state.buyerPaymentInfo.BuyerPaymentList )
  const BuyerPayment  = useSelector((state:any)=>state.buyerPaymentInfo.BuyerPayment  )
  let auth = JSON.parse(sessionStorage.getItem("user") || "{}");
  const [BankingInfo, setBankingInfo] = useState([]);
  useEffect(() => {
    
    axios.post("http://localhost:9000/api/payment/",{
      userid : auth['userid']
    }).then(async ({ data }) => {
      setBankingInfo(data.status.Transactions);
      dispatch(getPayment(data.status.Transactions))
    });
  }, [dispatch]);




  function GetForm() {
    switch (currForm) {
      case 0:
        return <DebitCreditCardForm />;
      case 1:
        return <NetBankingForm />;
      case 2:
        return <UPIForm />;
      default:
        return <DebitCreditCardForm />;
    }
  }

  function handleOptionChange(index: number) {
    setCurrForm(index);
  }

  return (
    <div className="container m-0 p-0">
      <div className="row">
        <div className="col">
          <div className="std-card m-2">
            <p className="std-font2"> Saved Payment Methods </p>{" "}
            <div className="m-2">
              <p className="std-font2">Your Saved Cards</p>
              <ul className="std-ul">
                {buyerPaymentInfo.map((card: any, index: number) => {
                  if (
                    card.BankingInfo.payment_type === "debit/credit_card") {
                    return (
                      <li key={index} className="m-2">
                        <CardMethodComponent card={card} edit={true} index={index}/>
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
            <div className="m-2">
              <p className="std-font2">Your Net Banking accounts</p>
              <ul className="std-ul">
                {buyerPaymentInfo.map((acc: any, index: number) => {
                  if (acc.BankingInfo.payment_type === "netbanking") {
                    return (
                      <li key={index} className="m-2">
                        <NetBankingMethodComponent bank={acc} edit={true} index={index}/>
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
            <div className="m-2">
              <p className="std-font2">Your UPI Ids</p>
              <ul className="std-ul">
                {buyerPaymentInfo.map((upi: any, index: number) => {
                  if (upi.BankingInfo.payment_type === "upi") {
                    return (
                      <li key={index} className="m-2">
                        <UPIComponent upi={upi} edit={true} index={index} />
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="std-card m-2">
            <p className="std-font2">Add a payment method</p>
            <div className="m-2">
              <ul className="std-ul">
                {availableForms.map((elem, index) => {
                  return (
                    <li key={index}>
                      <input
                        type="radio"
                        name="methodOption"
                        onClick={() => {
                          handleOptionChange(index);
                        }}
                      />
                      <label
                        className="std-font1 m-1"
                        onClick={() => {
                          handleOptionChange(index);
                        }}
                      >
                        {elem}
                      </label>
                    </li>
                  );
                })}
              </ul>
            </div>
            <GetForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;




// const addBlogs = (e)=>{
//   e.preventDefault()
//   console.log(title+ " "+ desc)
//   axios.post("",{
//   title : title,
//   description : desc,
//   userEmail : JSON.parse(auth).email,
//   userName : JSON.parse(auth).username
// }).then((resp)=>{
//   alert("")

// })
// }
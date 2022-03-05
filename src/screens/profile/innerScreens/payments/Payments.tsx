import React, { useState } from "react";
import "./Payments.scss";
import NetBankingForm from "./NetBankingForm";
import UPIForm from "./UPIForm";
import DebitCreditCardForm from "./DebitCreditCardForm";

import CardMethodComponent from "../../../../components/checkoutCards/CardMethodComponent";
import NetBankingMethodComponent from "../../../../components/checkoutCards/NetBankingMethodComponent";
import UPIComponent from "../../../../components/checkoutCards/UPIComponent";

import { BsChevronDown } from 'react-icons/bs'
import { Collapse, Button } from 'react-bootstrap'

const Payments = () => {
  const [currForm, setCurrForm] = useState(0)
  const availableForms = ['Credit/Debit card', 'Net banking', 'UPI']
  const availableCards = [
    {
      type: "Debit Card",
      details: {
        card_number: "1234-4567-7890-0123",
        expiry: "11/23"
      }
    }, {
      type: "Credit Card",
      details: {
        card_number: "1244-2467-7290-8923",
        expiry: "12/25"
      }
    }
  ]
  const availableNetBankingAccounts = [{
    type: "Net Banking",
    details: {
      name: "SBI",
      accountNumber: "FWF1F8G4H8291"
    }
  }]
  const availableUPIIDs = [{
    type: "UPI",
    details: {
      upiId: "bw992fb28bf19b2gv3",
      provider: "GooglePay"
    }
  }]

  function GetForm() {
    switch (currForm) {
      case 0:
        return <DebitCreditCardForm />
      case 1:
        return <NetBankingForm />
      case 2:
        return <UPIForm />
      default:
        return <DebitCreditCardForm />
    }
  }

  function handleOptionChange(index: number) {
    setCurrForm(index)
  }

  return (
    <div className="container m-0 p-0">
      <div className='row'>
        <div className='col'>
          <div className="std-card m-2">
            <p className="std-font2"> Saved Payment Methods </p>{" "}
            <div className='m-2'>
              <p className='std-font2'>Your Saved Cards</p>
              <ul className="std-ul">
                {
                  availableCards.map((card, index) => {
                    return <li key={index} className='m-2'>
                      <CardMethodComponent card={card} edit={true} />
                    </li>
                  })
                }
              </ul>
            </div>
            <div className='m-2'>
              <p className='std-font2'>Your Net Banking accounts</p>
              <ul className="std-ul">
                {
                  availableNetBankingAccounts.map((acc, index) => {
                    return <li key={index} className='m-2'>
                      <NetBankingMethodComponent bank={acc} edit={true} />
                    </li>
                  })
                }
              </ul>
            </div>
            <div className='m-2'>
              <p className='std-font2'>Your UPI Ids</p>
              <ul className="std-ul">
                {
                  availableUPIIDs.map((upi, index) => {
                    return <li key={index} className='m-2'>
                      <UPIComponent upi={upi} edit={true} />
                    </li>
                  })
                }
              </ul>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className="std-card m-2">
            <p className="std-font2">Add a payment method</p>
            <div className='m-2'>
              <ul className='std-ul'>
                {
                  availableForms.map((elem, index) => {
                    return <li key={index}>
                      <input type='radio' name='methodOption' onClick={() => { handleOptionChange(index) }} />
                      <label className="std-font1 m-1" onClick={() => { handleOptionChange(index) }}>{elem}</label>
                    </li>
                  })
                }
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

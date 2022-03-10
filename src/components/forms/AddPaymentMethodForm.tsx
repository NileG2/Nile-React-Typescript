import React,{useState} from 'react'

import NetBankingForm from '../../screens/profile/innerScreens/payments/NetBankingForm';
import UPIForm from '../../screens/profile/innerScreens/payments/UPIForm';
import DebitCreditCardForm from '../../screens/profile/innerScreens/payments/DebitCreditCardForm';


const AddPaymentMethodForm = () => {
    const [currForm, setCurrForm] = useState(0);
    const availableForms = ["Credit/Debit card", "Net banking", "UPI"];


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
    )
}

export default AddPaymentMethodForm
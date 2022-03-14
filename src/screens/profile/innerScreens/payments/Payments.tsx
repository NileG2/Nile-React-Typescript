import React, { useState, useEffect } from "react";
import "./Payments.scss";

import CardMethodComponent from "../../../../components/checkoutCards/CardMethodComponent";
import NetBankingMethodComponent from "../../../../components/checkoutCards/NetBankingMethodComponent";
import UPIComponent from "../../../../components/checkoutCards/UPIComponent";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getPayment } from "../../../../redux/actions/BuyerPayment";

import AddPaymentMethodForm from "../../../../components/forms/AddPaymentMethodForm";

const Payments = () => {
    const dispatch = useDispatch();

    const buyerPaymentInfo = useSelector((state: any) => state.buyerPaymentInfo.BuyerPaymentList);
    const auth = JSON.parse(sessionStorage.getItem("user") || "{}");
    useEffect(() => {

        axios.post("http://localhost:9000/api/payment/", {
            userid: auth["userid"]
        }).then(async ({ data }) => {
            dispatch(getPayment(data.status.payment_methods));
        });

    }, []);

    console.log(buyerPaymentInfo);

    return (
        <div className="container m-0 p-0">
            <div className="row">
                <div className="col">
                    <div className="std-card m-2">
                        <p className="std-font2"> Saved Payment Methods </p>{" "}
                        <div className="m-2">
                            <p className="std-font2">Your Saved Cards</p>
                            <ul className="std-ul">
                                {buyerPaymentInfo.length > 0 ? buyerPaymentInfo.map((card: any, index: number) => {
                                    if (
                                        card.BankingInfo.payment_type === "debit/credit_card") {
                                        return (
                                            <li key={index} className="m-2">
                                                <CardMethodComponent card={card} edit={true} index={index} />
                                            </li>
                                        );
                                    }
                                }) : <>Nothing to show yet...Add method</>
                                }
                            </ul>
                        </div>
                        <div className="m-2">
                            <p className="std-font2">Your Net Banking accounts</p>
                            <ul className="std-ul">
                                {buyerPaymentInfo.length > 0 ? buyerPaymentInfo.map((acc: any, index: number) => {
                                    if (acc.BankingInfo.payment_type === "netbanking") {
                                        return (
                                            <li key={index} className="m-2">
                                                <NetBankingMethodComponent bank={acc} edit={true} index={index} />
                                            </li>
                                        );
                                    }
                                }) : <>Nothing to show yet...Add method</>
                                }
                            </ul>
                        </div>
                        <div className="m-2">
                            <p className="std-font2">Your UPI Ids</p>
                            <ul className="std-ul">
                                {buyerPaymentInfo.length > 0 ? buyerPaymentInfo.map((upi: any, index: number) => {
                                    if (upi.BankingInfo.payment_type === "upi") {
                                        return (
                                            <li key={index} className="m-2">
                                                <UPIComponent upi={upi} edit={true} index={index} />
                                            </li>
                                        );
                                    }
                                }) : <>Nothing to show yet...Add method</>
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <AddPaymentMethodForm />
                </div>
            </div>
        </div>
    );
};

export default Payments;
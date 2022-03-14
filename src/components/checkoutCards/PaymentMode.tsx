import e from "express";
import React from "react";

import CardMethodComponent from "../checkoutCards/CardMethodComponent";
import NetBankingMethodComponent from "../checkoutCards/NetBankingMethodComponent";
import UPIComponent from "../checkoutCards/UPIComponent";

const PaymentMode = (props: any) => {

    switch (props.mode.BankingInfo.payment_type) {
    case "debit/credit_card":
        return <CardMethodComponent card={props.mode} edit={false} />;
    case "netbanking":
        return <NetBankingMethodComponent bank={props.mode} edit={false} />;
    case "upi":
        return <UPIComponent upi={props.mode} edit={false} />;
    default:
        return <></>;
    }
    return <></>;
};

export default PaymentMode;
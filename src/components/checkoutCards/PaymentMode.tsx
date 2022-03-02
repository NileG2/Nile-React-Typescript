import React from 'react'

import CardMethodComponent from '../checkoutCards/CardMethodComponent'
import NetBankingMethodComponent from '../checkoutCards/NetBankingMethodComponent'
import UPIComponent from '../checkoutCards/UPIComponent'

const PaymentMode = (props:any) => {
    switch (props.mode.type) {
        case "Debit Card":
          return <CardMethodComponent card={props.mode} />
        case "Credit Card":
          return <CardMethodComponent card={props.mode} />
        case "Net Banking":
          return <NetBankingMethodComponent bank={props.mode} />
        case "UPI":
          return <UPIComponent upi={props.mode} />
        default:
          return <></>
      }
}

export default PaymentMode
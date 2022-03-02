import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nextStep } from '../../redux/actions/Checkout'

const PaymentSelect = () => {

  const dispatch = useDispatch()
  const steps = useSelector((state: any) => state.checkout.steps)
  const currStepIndex = useSelector((state: any) => state.checkout.step)

  const [avaibleModes, setAvailableModes] = useState<any>([{
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
  }, {
    type: "Net Banking",
    details: {
      name: "SBI",
      accountNumber: "FWF1F8G4H8291"
    }
  }, {
    type: "UPI",
    details: {
      upiId: "bw992fb28bf19b2gv3",
      provider: "GooglePay"
    }
  }])
  const [currMode, setCurrMode] = useState(avaibleModes[0])

  function handleNextStep(e: any) {
    e.preventDefault()
    let allSteps = steps
    allSteps[currStepIndex].state = 1
    dispatch(nextStep(currStepIndex, allSteps))
  }

  function getPresentableNumber(number: string) {
    let tokens = number.split('-')
    let dummy = "XXXX-XXXX-XXXX-"
    return dummy + tokens[tokens.length - 1]
  }

  function CardMethodComponent(props: any) {
    return <div className='std-card std-mode-dimension'>
      <p className='std-boldFont m-0'>{props.card.type}</p>
      <p className='std-boldFont m-0'>{getPresentableNumber(props.card.details.card_number)}</p>
      <p className='m-0'>Expiry: {props.card.details.expiry}</p>
    </div>
  }

  function NetBankingMethodComponent(props: any) {
    return <div className='std-card std-mode-dimension'>
      <p className='std-boldFont m-0'>{props.bank.type}</p>
      <p className='std-boldFont m-0'>{props.bank.details.accountNumber}</p>
      <p className='m-0'>Bank: {props.bank.details.name}</p>
    </div>
  }

  function UPIComponent(props: any) {
    return <div className='std-card std-mode-dimension'>
      <p className='std-boldFont m-0'>{props.upi.type}</p>
      <p className='std-boldFont m-0'>{props.upi.details.upiId}</p>
      <p className='m-0'>Provider: {props.upi.details.prodvider}</p>
    </div>
  }

  function PaymentMode(props: any) {
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

  return (
    <div className='Card'>
      <div className='row'>
        <div className='col'>
          <div className='m-2'>
            <p className='std-font2'>Selected Payment Mode</p>
            <PaymentMode mode={currMode} />
          </div>
          <div className='m-2'>
            <p className='std-font2'>Selecte from available Payment Mode</p>
            <ul className='std-ul'>
              {
                avaibleModes.map((mode: any, index: number) => {
                  return <li className='m-2' key={index}>
                    <div className='d-flex align-items-center'>
                      <input type="radio" className='m-2' name="optradio" />
                      <PaymentMode mode={mode} />
                    </div>
                  </li>
                })
              }
            </ul>
          </div>
        </div>
        <div className='col'>
          {/* <div className='m-2'>
            <p className='std-font2'>Other Payment Mode</p>
            <button className='std-btn std-btnOrange' style={{ width: "20rem" }}>Add Payment Method</button>
          </div> */}
          <div className='d-flex justify-content-center'>
            <button className='std-btn std-btnOrange' style={{ width: "20rem" }} onClick={(e) => { handleNextStep(e) }}>Proceed</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentSelect
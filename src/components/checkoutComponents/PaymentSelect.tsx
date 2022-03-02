import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nextStep } from '../../redux/actions/Checkout'

import PaymentMode from '../checkoutCards/PaymentMode'

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

  function handleSelectMode(index:number){
    setCurrMode(avaibleModes[index])
  }

  function handleNextStep(e: any) {
    e.preventDefault()
    let allSteps = steps
    allSteps[currStepIndex].state = 1
    dispatch(nextStep(currStepIndex, allSteps))
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
                      <input type="radio" className='m-2' onChange={()=>{handleSelectMode(index)}} name="optradio" />
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
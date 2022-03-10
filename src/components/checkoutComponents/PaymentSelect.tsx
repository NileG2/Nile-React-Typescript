import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nextStep, setPaymentOption } from '../../redux/actions/Checkout'
import PaymentMode from '../checkoutCards/PaymentMode'

import AddPaymentMethodForm from '../forms/AddPaymentMethodForm'
import { setPayment } from '../../redux/actions/BuyerPayment'

const PaymentSelect = () => {

  const dispatch = useDispatch()
  const steps = useSelector((state: any) => state.checkout.steps)
  const currStepIndex = useSelector((state: any) => state.checkout.step)

  const allPaymentList = useSelector((state: any) => state.buyerPaymentInfo.BuyerPaymentList)

  const [currMode, setCurrMode] = useState(null)

  function handleSelectMode(index: number) {
    setCurrMode(allPaymentList[index])
  }

  function handleNextStep(e: any) {
    e.preventDefault()
    let allSteps = steps
    allSteps[currStepIndex].state = 1
    dispatch(nextStep(currStepIndex, allSteps))
    dispatch(setPaymentOption(currMode))
  }

  useEffect(() => {
    if (allPaymentList.length > 0) {
      setCurrMode(allPaymentList[0])
      dispatch(setPayment(allPaymentList[0]))
    }
  }, [allPaymentList])

  return (
    <div className='Card'>
      <div className='row'>
        <div className='col'>
          <div className='m-2'>
            {currMode!==null?<p className='std-font2'>Selected Payment Mode</p>:<p className='std-font2'>Please Select a Payment Mode</p>}
            {
              currMode === null ? <div>
                Add Payment method
              </div> : <PaymentMode mode={currMode} />
            }
          </div>
          <div className='m-2'>
            <p className='std-font2'>Select from available Payment Mode</p>
            <ul className='std-ul'>
              {
                allPaymentList.length > 0 ? allPaymentList.map((mode: any, index: number) => {
                  return <li className='m-2' key={index}>
                    <div className='d-flex align-items-center'>
                      <input type="radio" className='m-2' onChange={() => { handleSelectMode(index) }} name="optradio" />
                      <PaymentMode mode={mode} />
                    </div>
                  </li>
                }) : <p className='std-font1'>Nothing to show yet...</p>
              }
            </ul>
          </div>
        </div>
        <div className='col'>
          <div className='d-flex justify-content-center m-2'>
            <button className='std-btn std-btnOrange' style={{ width: "20rem" }} onClick={(e) => { handleNextStep(e) }}>Proceed</button>
          </div>
          <div className='m-2'>
            <p className='std-font2'>Other Payment Mode</p>
            <AddPaymentMethodForm />
          </div>

        </div>
      </div>
    </div>
  )
}

export default PaymentSelect
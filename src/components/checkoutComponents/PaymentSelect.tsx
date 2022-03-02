import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nextStep } from '../../redux/actions/Checkout'

const PaymentSelect = () => {

  const dispatch = useDispatch()
  const steps = useSelector((state:any)=>state.checkout.steps)
  const currStepIndex = useSelector((state: any) => state.checkout.step)

  function handleNextStep(e: any) {
    e.preventDefault()
    let allSteps = steps
    allSteps[currStepIndex].state=1
    dispatch(nextStep(currStepIndex,allSteps))
  }

  return (
    <div className='d-flex justify-content-center'>
      <button className='std-btn std-btnOrange' style={{ width: "20rem" }} onClick={(e) => { handleNextStep(e) }}>Proceed</button>
    </div>
  )
}

export default PaymentSelect
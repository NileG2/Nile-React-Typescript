import React, { useState } from 'react'
import './helpers.scss'

import { useDispatch, useSelector } from 'react-redux'
import { navigateSteps } from '../../redux/actions/Checkout'

const Steps = (props) => {
    const [steps, setSteps] = useState(props.steps)
    const dispatch = useDispatch()

    const currStep = useSelector((state) => state.checkout.step)

    function handleNavigateStep(index) {
        if (index <= currStep) {
            dispatch(navigateSteps(index))
        }
    }

    return (
        <div className='Steps'>
            <ul className='std-ul d-flex m-3 justify-content-center'>
                {
                    steps.map((step, index) => {
                        if (step.state == 0) {
                            return <li key={index}>
                                <div className='d-flex'>
                                    <div role="button"
                                        className='std-circle std-inactive text-white text-center std-boldFont'
                                        onClick={() => { handleNavigateStep(index) }}>{index + 1}</div>
                                    {index !== steps.length - 1 ? <div role="button"
                                        className='std-line std-inactive'
                                        onClick={() => { handleNavigateStep(index) }}
                                    ></div> : <></>}
                                </div>
                                <p style={{ position: "relative", left: "-1rem" }}>{step.name}</p>
                            </li>
                        } else {
                            return <li key={index}>
                                <div className='d-flex'>
                                    <div role="button"
                                        className='std-circle std-active text-white text-center std-boldFont'
                                        onClick={() => { handleNavigateStep(index) }}>{index + 1}</div>
                                    {index !== steps.length - 1 ? <div role="button"
                                        className='std-line std-active'
                                        onClick={() => { handleNavigateStep(index) }}></div> : <></>}
                                </div>
                                <p style={{ position: "relative", left: "-1rem" }}>{step.name}</p>
                            </li>
                        }
                    })
                }
            </ul>
        </div>
    )
}

export default Steps
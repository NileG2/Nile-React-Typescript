import React,{useState} from 'react'
import './helpers.scss'

const Steps = (props) => {
    const [steps, setSteps] = useState(props.steps)
    return (
        <div className='Steps'>
            <ul className='std-ul d-flex m-3  justify-content-center'>
                {
                    steps.map((step, index) => {
                        if (step.state == 0) {
                            return <li key={index}>
                                <div className='d-flex'>
                                    <div className='std-circle std-inactive'></div>
                                    {index !== steps.length - 1 ? <div className='std-line std-inactive'></div> : <></>}
                                </div>
                                <p style={{ position: "relative", left: "-1rem" }}>{step.name}</p>
                            </li>
                        } else {
                            return <li key={index}>
                                <div className='d-flex'>
                                    <div className='std-circle std-active'></div>
                                    {index !== steps.length - 1 ? <div className='std-line std-active'></div> : <></>}
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
import React, { useState, useEffect } from 'react'
import { MdClear } from 'react-icons/md'

export function ColorOptions(props) {

    const [selectedColor, setSelectedColor] = useState(props.available[0])

    function handleSelect(index) {
        console.log(props.available[index])
        setSelectedColor(props.available[index])
    }

    return <div className='m-2'>
        <p className='std-font1 m-0'>Select Color</p>
        <ul className='std-ul d-flex' style={{ overflowX: "scroll" }}>
            {
                props.available.map((elem, index) => {
                    return <li className='m-1' key={index} onClick={() => { handleSelect(index) }}>
                        {
                            elem === selectedColor ? <div className='std-card std-activeCard' role="button">
                                <div
                                    className='std-colorBox'
                                    style={{ background: elem, border: "solid 1px black" }}>
                                </div>
                                {props.edit===true?<MdClear onClick={()=>{props.removeFunction(index)}}/>:<></>}
                            </div> : <div className='std-card' role="button">
                                <div
                                    className='std-colorBox'
                                    style={{ background: elem, border: "solid 1px black" }}>
                                </div>
                                {props.edit===true?<MdClear onClick={()=>{props.removeFunction(index)}}/>:<></>}
                            </div>
                        }
                    </li>
                })
            }
        </ul>
    </div>
}
export function SizeOption(props) {

    const [selectedOption, setSelectedOption] = useState(props.available[0])

    function handleSelect(index) {
        console.log(props.available[index])
        setSelectedOption(props.available[index])
    }

    return <div className='m-2'>
        <p className='std-font1 m-0'>Select size</p>
        <ul className='std-ul d-flex' style={{ overflowX: "scroll" }}>
            {
                props.available.map((elem, index) => {
                    return <li className='m-1' key={index} onClick={() => { handleSelect(index) }}>
                        {
                            elem === selectedOption ? <div className='std-card std-activeCard' role="button">
                                <p className='std-fontSmall m-0'>{elem}</p>
                                {props.edit===true?<MdClear onClick={()=>{props.removeFunction(index)}}/>:<></>}
                            </div> : <div className='std-card' role="button">
                                <p className='std-fontSmall m-0'>{elem}</p>
                                {props.edit===true?<MdClear onClick={()=>{props.removeFunction(index)}}/>:<></>}
                            </div>
                        }
                    </li>
                })
            }
        </ul>
    </div>
}

const SelectOptions = (props) => {

    function GetComponent() {
        switch (props.option.type) {
            case "color":
                return <ColorOptions available={props.option.available} />
            default:
                return <SizeOption available={props.option.available} />
        }
    }

    return (
        <GetComponent className='Card' />
    )
}

export default SelectOptions
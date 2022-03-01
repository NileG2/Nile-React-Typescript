import React, { useState, useEffect } from 'react'

const SelectOptions = (props) => {

    function ColorOptions(props) {
        return <div className='m-2'>
            <p className='std-font1 m-0'>Select Color</p>
            <ul className='std-ul d-flex' style={{overflowX:"scroll"}}>
                {
                    props.available.map((elem,index) => {
                        return <li className='m-1' key={index}>
                            <div className='std-card'>
                                <div className='std-colorBox' style={{background:elem,border:"solid 1px black"}}>
                                </div>
                            </div>
                        </li>
                    })
                }
            </ul>
        </div>
    }
    function SizeOption(props){
        return <div className='m-2'>
            <p className='std-font1 m-0'>Select size</p>
            <ul className='std-ul d-flex' style={{overflowX:"scroll"}}>
                {
                    props.available.map((elem,index) => {
                        return <li className='m-1' key={index}>
                            <div className='std-card'>
                                <p className='std-fontSmall m-0'>{elem}</p>
                            </div>
                        </li>
                    })
                }
            </ul>
        </div>
    }

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
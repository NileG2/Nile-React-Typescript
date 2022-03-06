import React, { useState } from 'react'
import { MdClear } from 'react-icons/md'

const TechnicalDetails = () => {
    const [dataArray, setDataArray] = useState<any>([])
    const [curr, setCurr] = useState({
        key: "",
        value: "",
    })

    function addData(data: any) {
        setDataArray([...dataArray, data])
        setCurr({
            key: "",
            value: "",
        })
    }

    function removeData(index: number) {
        setDataArray(dataArray.filter((elem: any, id: number) => {
            return id !== index
        }))
    }

    function setCurrKey(key: string) {
        setCurr({ ...curr, key: key })
    }
    function setCurrValue(value: string) {
        setCurr({ ...curr, value: value })
    }

    return (
        <form className="std-card m-2">
            <p className='std-font2'>Add Technical Details</p>
            <div className="row m-2">
                <label className="std-boldFont">Add key-Value pair :</label>
                <div className='input-group'>
                    <input className="std-inputField col-5" placeholder='Key' value={curr.key} onChange={(e) => { setCurrKey(e.target.value) }}></input>
                    <input className="std-inputField col-5" placeholder='value' value={curr.value} onChange={(e) => { setCurrValue(e.target.value) }}></input>
                    <div className='std-btn std-btnOrange' onClick={() => { addData(curr) }}>+</div>
                </div>
            </div>
            <br />
            <div>
                <p className="std-boldFont std-font2">Technical Details</p>
                <ul className='list-group'>
                    {
                        dataArray.length>0?dataArray.map((elem: any, index: number) => {
                            return <li key={index} className='list-group-item'>
                                <div className='row'>
                                    <div className='col-5 std-boldFont'>
                                        {elem.key}
                                    </div>
                                    <div className='col-5'>
                                        {elem.value}
                                    </div>
                                    <div className='col-2'>
                                        <MdClear onClick={() => { removeData(index) }} />
                                    </div>

                                </div>
                            </li>
                        }):<>Nothing to show yet</>
                    }
                </ul>
            </div>
            <br />
            <div className="d-flex justify-content-center">
                <button
                    className="std-btn std-btnOrange"
                    style={{ width: "10rem" }}
                >
                    Save
                </button>
            </div>
        </form>
    )
}

export default TechnicalDetails
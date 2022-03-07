import React, { useState } from 'react'
import { ColorOptions } from '../../helpers/SelectOptions'

const ProductColor = () => {
    const [value, setValue] = useState("#000000");
    const [allValues, setAllValues] = useState<any>([])

    function addValue() {
        setAllValues((old: any) => [...old, value])
        setValue("#000000")
    }

    function removeData(index: number) {
        setAllValues(allValues.filter((elem: any, ind: number) => {
            return ind !== index
        }))
    }

    return (
        <form className="std-card m-2">
            <p className='std-font2'>Add Product Color options</p>
            <div className="row m-2">
                <label className="std-boldFont">Select color from Color palet :</label>
                <div className='input-group'>
                    <input type="color" style={{height:"100%"}} value={value} onChange={(e: any) => { setValue(e.target.value) }}></input>
                    <div className='std-btn std-btnOrange' onClick={() => { addValue() }}>+</div>
                </div>
            </div>
            <br />
            <div>
                <p className="std-boldFont std-font2">Added Colors</p>
                {
                    allValues.length > 0 ? <ColorOptions available={allValues} edit={true} removeFunction={removeData} /> : <>Nothing to show yet</>
                }

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

export default ProductColor
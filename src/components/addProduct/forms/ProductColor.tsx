import React, { useState } from 'react'
import { ColorOptions } from '../../helpers/SelectOptions'
import { useDispatch, useSelector } from 'react-redux'
import { createProduct } from '../../../redux/actions/Product'

const ProductColor = () => {
    let product = useSelector((state:any)=>state.productDetail.product)
    let dispatch = useDispatch()

    const [value, setValue] = useState("#000000");
    const [allValues, setAllValues] = useState<any>([])

    function addValue() {
        setAllValues((old: any) => [...old, value])
        setValue("#000000")
        product['buying_options']['color'] = [...allValues, value]

          dispatch(createProduct(product))
        console.log(product)
    }

    function removeData(index: number) {
        setAllValues(allValues.filter((elem: any, ind: number) => {
            return ind !== index
        }))
        product['buying_options']['color'].splice(index,1)
        dispatch(createProduct(product))
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
           
        </form>
    )
}

export default ProductColor
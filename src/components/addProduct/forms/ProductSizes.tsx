import React, { useState } from "react";
import { SizeOption } from "../../helpers/SelectOptions";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../../../redux/actions/Product";

const ProductSizes = () => {
    const product = useSelector((state:any)=>state.productDetail.product);
    const dispatch = useDispatch();
    const [value, setValue] = useState(0);
    const [allValues, setAllValues] = useState<any>([]);

    function addValue() {
        setAllValues((old: any) => [...old, value]);
        setValue(0);
        product["buying_options"]["size"] = [...allValues, value];
    
        dispatch(createProduct(product));
        console.log(product);
    }

    function removeData(index: number) {
        setAllValues(allValues.filter((elem:any,ind:number)=>{
            return ind!==index;
        }));
        product["buying_options"]["size"].splice(index,1);
        dispatch(createProduct(product));
    }

    return (
        <form className="std-card m-2">
            <p className='std-font2'>Add Product Sizes</p>
            <div className="row m-2">
                <label className="std-boldFont">Select or type a number defining the size :</label>
                <div className='input-group'>
                    <input className="std-inputField" placeholder='value' value={value} onChange={(e: any) => { setValue(e.target.value); }}></input>
                    <div className='std-btn std-btnOrange' onClick={() => { addValue(); }}>+</div>
                </div>
            </div>
            <br />
            <div>
                <p className="std-boldFont std-font2">Added Sizes</p>
                {
                    allValues.length > 0 ? <SizeOption available={allValues} edit={true} removeFunction={removeData} /> : <>Nothing to show yet</>
                }

            </div>
            <br />
      
        </form>
    );
};

export default ProductSizes;
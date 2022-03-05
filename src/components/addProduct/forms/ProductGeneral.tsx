import React from 'react'

const ProductGeneral = (props: any) => {
    return (
        <form className="std-card m-2">
            <p className='std-font2'>General Product Information</p>
            <div className="row m-2">
                <label className="col-4 std-boldFont">Name :</label>
                <input className="std-inputField col-8"></input>
            </div>
            <div className="row m-2">
                <label className="col-4  std-boldFont">Brand :</label>
                <input className="std-inputField col-8"></input>
            </div>
            <div className='row m-2'>
                <label className="col-4  std-boldFont">Available Quantity :</label>
                <input className="std-inputField col-8" type="number" min={1}></input>
            </div>
            <div className='row m-2'>
                <label className="col-4  std-boldFont">Price :</label>
                <input className="std-inputField col-8" type="number" min={1}></input>
            </div>
            <br />
            <div className="d-flex justify-content-center">
                <button className="std-btn std-btnOrange" style={{ width: "10rem" }} >
                    Save
                </button>
            </div>
        </form>
    )
}

export default ProductGeneral
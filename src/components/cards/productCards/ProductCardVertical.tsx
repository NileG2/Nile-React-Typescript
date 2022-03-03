import React from 'react'
import Rating from '@mui/material/Rating';

const productCardVertical:any = (props:any) => {
  return (
    <div className='Card'>
      <div className='std-card std-card-dimension std-no-shadow p-0 m-1'>
        <div className='d-flex justify-content-center'>
          <img src={props.product.image} width="100%" height="100%" />
        </div>
        <div className='p-2'>
          <p className='m-0 std-boldFont overflow-hidden'>{props.product.product_name}</p>
          <p className='std-bold std-greenText m-0 std-desc'>In Stock</p>
          <p className='std-fontSmall std-desc m-0'>Sold By {props.product.brand}</p>
          <Rating name="read-only" value={3.5} precision={0.5} readOnly />
          <div className='row'>
            <p className='col-3 m-0 std-desc std-fontSmall'>INR</p>
            <p className='col-9 m-0 p-0 std-boldFont  std-font1'>{props.product.price}</p>
          </div>
          <button className='std-btn std-btnOrange'>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default productCardVertical
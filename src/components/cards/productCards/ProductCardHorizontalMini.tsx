import React, { useEffect, useState } from 'react'
import "./ProductCard.scss";
import Rating from '@mui/material/Rating';

import { setItemQuantity, removeItem, setCartSubTotal } from '../../../redux/actions/Cart'
import { useDispatch, useSelector } from 'react-redux'

const ProductCardHorizontalMini = (props: any) => {

  const allProducts = useSelector((state: any) => state.cart.userCart)
  const [currProduct, setCurrProduct] = useState(props.product)

  return (
    <div className='Card'>
      <div className='p-0' style={{height:"4.5em"}}>
        <div className='row m-2'>
          <div className='col-2'>
            <img src={currProduct.image} height="50%" className='m-2' />
          </div>
          <div className='col-10'>
            <div className='row'>
              <div className='col-8'>
                <p className='m-0 std-boldFont overflow-hidden'>{currProduct.product_name}</p>
                <p className='std-fontSmall std-desc m-0'>Sold By {currProduct.brand}</p>
              </div>
              <div className='col-4'>
                <div className='row'>
                  <p className='col-9 m-0 p-0 std-boldFont std-font2' style={{ textAlign: "end" }}>{props.product.payable}</p>
                  <p className='col-3 m-0 std-desc std-fontSmall'>INR</p>
                </div>
              </div>
            </div>
            <div className='row'>
              <div style={{ marginRight: "1em" }} className='std-fontSmall'>Quantity: {props.product.quantity}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ProductCardHorizontalMini
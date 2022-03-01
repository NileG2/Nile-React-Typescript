import React, { useEffect, useState } from 'react'
import "./ProductCard.scss";
import Rating from '@mui/material/Rating';

import { setItemQuantity, removeItem, setCartSubTotal } from '../../../redux/actions/Cart'
import { useDispatch, useSelector } from 'react-redux'

const ProductCardHorizontal = (props: any) => {

  const allProducts = useSelector((state: any) => state.cart.userCart)
  const [currProduct, setCurrProduct] = useState(props.product)

  const [quantity, setQuantity] = useState(1)
  const [payable, setPayable] = useState(props.product.payable)

  useEffect(() => {
    setCurrProduct(props.product)
    setPayable(props.product.payable)
  }, [props.product])

  const dispatch = useDispatch()

  function removeProduct() {
    let requiredProducts = allProducts.filter((p:any,index:number)=>{
      return index!==props.index
    })
    dispatch(removeItem(requiredProducts))
    setSubTotal(requiredProducts)
  }

  function setSubTotal(products: []) {
    function getSubTotal(products: any[]) {
      let sum = 0
      for (let i = 0; i < products.length; i++) {
        sum += products[i].payable
      }
      return sum
    }
    dispatch(setCartSubTotal(getSubTotal(products)))
  }


  function setProductQuantity(e: any) {

    setQuantity(e.target.value)
    setPayable(e.target.value * currProduct.price)

    let tempProduct = currProduct
    tempProduct.quantity = e.target.value
    tempProduct.payable = e.target.value * currProduct.price

    setCurrProduct(tempProduct)
    dispatch(setItemQuantity(tempProduct, props.index))
    setSubTotal(allProducts)
  }

  return (
    <div className='Card'>
      <div className='std-card std-card-dimension-horizontal std-no-shadow p-0'>
        <div className='row m-2'>
          <div className='col-2'>
            <img src={currProduct.image} height="100%" />
          </div>
          <div className='col-10'>
            <div className='row'>
              <div className='col-8'>
                <p className='m-0 std-boldFont overflow-hidden'>{currProduct.product_name}</p>
                <p className='std-bold std-greenText m-0 std-desc'>In Stock</p>
                <p className='std-fontSmall std-desc m-0'>Sold By {currProduct.brand}</p>
                <Rating name="read-only" value={3.5} precision={0.5} readOnly />
              </div>
              <div className='col-4'>
                <div className='row'>
                  <p className='col-9 m-0 p-0 std-boldFont std-font2' style={{ textAlign: "end" }}>{payable}</p>
                  <p className='col-3 m-0 std-desc std-fontSmall'>INR</p>
                </div>
                {/* <button className='std-btn std-btnOrange'>Add to Cart</button> */}
              </div>
            </div>
            <div className='row'>
              <div className='col-4 d-flex'>
                <label style={{ marginRight: "1em" }} className='std-fontSmall'>Quantity</label>
                <input type="number" value={quantity} name="quantity" onChange={(e) => { setProductQuantity(e) }} className='std-number-input std-btn' min={1} max={10} />
              </div>
              <div className='col-4'>
                <p onClick={() => { removeProduct() }} className='std-link'>delete</p>
              </div>
              <div className='col-4'>
                <p className='std-link'>add to watchlist</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ProductCardHorizontal
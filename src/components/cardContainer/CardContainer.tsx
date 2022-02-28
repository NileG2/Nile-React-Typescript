import React, { useState, useEffect } from 'react'

import ProductCardHorizontal from '../cards/productCards/ProductCardHorizontal'

const CardContainer = () => {

  const [products, setProducts] = useState<any>([{
    product_name: "Jordan for Mens",
    product_id: "621b9e2f0df9ccbd0e2e5155",
    image: "https://picsum.photos/100",
    price: 19999,
    brand: "Jordan"
  }, {
    product_name: "Jordan for women",
    product_id: "621b9e2f0df9ccbd0e2e5155",
    image: "https://picsum.photos/100",
    price: 199,
    brand: "Jordan"
  }, {
    product_name: "Jordan for kids",
    product_id: "621b9e2f0df9ccbd0e2e5155",
    image: "https://picsum.photos/100",
    price: 199,
    brand: "Jordan"
  },{
    product_name: "Jordan for Mens",
    product_id: "621b9e2f0df9ccbd0e2e5155",
    image: "https://picsum.photos/100",
    price: 19999,
    brand: "Jordan"
  }, {
    product_name: "Jordan for women",
    product_id: "621b9e2f0df9ccbd0e2e5155",
    image: "https://picsum.photos/100",
    price: 199,
    brand: "Jordan"
  }, {
    product_name: "Jordan for kids",
    product_id: "621b9e2f0df9ccbd0e2e5155",
    image: "https://picsum.photos/100",
    price: 199,
    brand: "Jordan"
  }])

  useEffect(() => {
    // fetch cards information here
  })

  return (
    <div className='position-relative m-1'>
      <p className='std-font2'>Electronics</p>
      <a href='#' className='std-link position-absolute' style={{right:"0.1rem",top:"1.5em"}}>See More...</a>
      <div className='d-flex'>
        {
          products.map((product: any, index: number) => {
            return <ProductCardHorizontal key={index} product={product} />
          })
        }
      </div>
    </div>

  )
}

export default CardContainer
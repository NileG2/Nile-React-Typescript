import React, { useState, useEffect } from 'react'

import ProductCardVertical from '../cards/productCards/ProductCardVertical'

const CardContainerHorizontal = () => {

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
  }, {
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
  const [listName,setListName] = useState("Shoes")

  useEffect(() => {
    // fetch cards information here
  })

  return (
    <div className='position-relative m-1 std-card'>
      <p className='std-font2 m-0 p-0'>{listName}</p>
      <a href='#' className='std-link position-absolute' style={{ right: "1rem", top: "1.5em" }}>See More...</a>
      <div className='container'>
        <div className='d-flex'>
          {
            products.map((product: any, index: number) => {
              return <ProductCardVertical key={index} product={product} />
            })
          }
        </div>
      </div>
    </div>
  )
}

export default CardContainerHorizontal
import React from 'react'

const ProductSizes = () => {
  const availableDimensions = [{
    name: "Color",
    type: "color",
    for:"any"
  }, {
    name: "cloth size",
    for: "shirts/tops/sweaters/etc",
    type: "number",
    available: ["XS", "S", "M", "L", "XL", "XXL", "XXL"]
  }, {
    name: "cloth size",
    for: "pants/jeans/etc",
    type: "number",
    available: ["28", "30", "32", "34", "36", "38", "40"]
  }, {
    name: "cloth size",
    for: "shoe/sneaker/etc",
    type: "number",
    available: ["6UK", "7UK", "8UK", "9UK", "10UK", "11UK", "12UK"]
  }, {
    name: "cloth size",
    for: "bras",
    type: "number",
    available: ["30", "32", "34", "36", "38", "40"]
  },{
    name:"general size",
    for:"any",
    type:"number",
    available:["mm","cm","m","inch","foot"]
  }]
  return (
    <div className='std-card m-2'>
      <p className='std-font2'>Add product size</p>
    </div>
  )
}

export default ProductSizes
import React from 'react'
import ProductGeneral from './forms/ProductGeneral'
import ProductHighlights from './forms/ProductHighlights'
import TechnicalDetails from './forms/TechnicalDetails'
import ProductSizes from './forms/ProductSizes'
import ProductColor from './forms/ProductColor'
import ProductImages from './forms/ProductImages'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { toast } from "react-toastify";

const AddProductFormContainer = (props:any) => {
  let product = useSelector((state:any)=>state.productDetail.product)
  let dispatch = useDispatch()

  

  const addProductToMongoAndFirestore = (e:any)=>{
    e.preventDefault()
    
  let productDetail = {
    product_name : product.name,
    product_price : product.price,
    product_category : product.category,
    brand : product.brand,
    product_tags : [],
    highlights : product.highlights,
    technical_details : product.technical_details,
    available_quantity : parseInt(product.available_quantity),
    buying_options : product.buying_options,
    product_images : product.images,
    inventory_id : props.inventory.inventory_id,
    rating_id : "864823024289"
  }

  let pid  =''

    axios.post("http://localhost:9000/api/products/",
      productDetail
    ).then((res)=>{
      toast.success("Product added successfully");
      console.log(res.data.product_id)
      pid = res.data.product_id
      axios.post("http://localhost:9000/api/rating/new/",{
      product_id : res.data.product_id
    }).then((res)=>{
      console.log(res.data.rating_id)
      axios.put(`http://localhost:9000/api/products/${product.category}/${pid}`,{
      rating_id : res.data.rating_id
    }).then((res)=>{
      console.log(res.data)
    })
    })
      // console.log(res.data)
    }).catch(err=>{
      console.log(err)
    })
    console.log(productDetail)

  }

  return (
    <div className='std-card m-2'>
      <p className='std-font2'>ADD PRODUCT</p>
      <div className='std-section'></div>
      <div className='row'>
        <div className='col'>
          <ProductGeneral />
          <ProductHighlights />
          <TechnicalDetails />
        </div>
        <div className='col'>
          <ProductImages />
          <ProductSizes />
          <ProductColor />
        </div>
      </div>

      <div className="d-grid gap-2">
        <button className="btn btn-primary" type="button" onClick={(e)=>{addProductToMongoAndFirestore(e)}}>Save</button>
      </div>

    </div>
  )
}

export default AddProductFormContainer
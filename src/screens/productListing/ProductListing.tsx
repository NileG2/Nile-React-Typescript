import React from 'react'
import CardContainerHorizontal from '../../components/cardContainer/CardContainerHorizontal'
import SidebarFilter from '../../components/filter/SidebarFilter'
import 'bootstrap/dist/css/bootstrap.css';
import ProductsPagination from "../../components/pagination/ProductsPagination";

const ProductListing = () => {
  return (
    <div className='std-bg'>
      <div className='d-flex'>
        <SidebarFilter />
        <div className='container'>
          <CardContainerHorizontal />
          <CardContainerHorizontal />
          <ProductsPagination />
        </div>
      </div>
    </div>
  )
}

export default ProductListing
import React from 'react'
import CardContainerHorizontal from '../../components/cardContainer/CardContainerHorizontal'
import SidebarFilter from '../../components/filter/SidebarFilter'
import NavBar from '../../components/nav/NavBar'
import ProductsPagination from "../../components/pagination/ProductsPagination"
const ProductListing = () => {
  return (
    <div className='std-bg'>
      <NavBar/>
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